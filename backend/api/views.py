from django.http import JsonResponse
from rest_framework.decorators import api_view,permission_classes
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from .models import Train, Booking
from .services import book_seat
from django.contrib.auth.models import User
from django.conf import settings
from django.contrib.auth import authenticate
from django.views.decorators.csrf import csrf_exempt
from rest_framework.permissions import AllowAny
import jwt
import json
import random
import string
@api_view(['POST'])
@permission_classes([AllowAny])  # Allow any user to access this view
def register_user(request):
    data = json.loads(request.body)
    username = data.get('username')
    password = data.get('password')
    email = data.get('email')  # Get email from the request data
    is_staff = data.get('is_staff', False)

    try:
        # Create the user with username, password, and email
        user = User.objects.create_user(username=username, password=password, email=email)
        user.is_staff = is_staff  # Set the is_staff field
        user.save() 
        return JsonResponse({
            'status': 'Account successfully created',
            'status_code': 200,
            'user_id': str(user.id)  # Return the user's ID
        }, status=201)
    except Exception as e:
        return JsonResponse({'error': str(e)}, status=400)

@api_view(['POST'])
@permission_classes([AllowAny])  # Allow any user to access this view
def login_user(request):
    data = json.loads(request.body)  # Use json.loads to parse the request body
    username = data.get('username')
    password = data.get('password')

    user = authenticate(username=username, password=password)
    if user is not None:
        # Determine the user's role
        role = 'admin' if user.is_staff else 'user'  # Adjust this logic based on your role management

        # Generate a JWT token with user_id and role
        access_token = jwt.encode({'user_id': user.id, 'role': role}, settings.SECRET_KEY, algorithm='HS256')
        
        return JsonResponse({
            'status': 'Login successful',
            'status_code': 200,
            'user_id': str(user.id),
            'access_token': access_token,
            'role': role,  # Include role in the response
        }, status=200)
    else:
        return JsonResponse({
            'status': 'Incorrect username/password provided. Please retry',
            'status_code': 401,
        }, status=401)
@csrf_exempt
@api_view(['POST'])
def add_new_train(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        train_name = data.get('train_name')
        source = data.get('source')
        destination = data.get('destination')
        seat_capacity = data.get('seat_capacity')
        available_seats = seat_capacity
        arrival_time_at_source = data.get('arrival_time_at_source')
        arrival_time_at_destination = data.get('arrival_time_at_destination')

        try:
            train = Train.objects.create(
                train_name=train_name,
                source=source,
                destination=destination,
                seat_capacity=seat_capacity,
                available_seats=available_seats,
                arrival_time_at_source=arrival_time_at_source,
                arrival_time_at_destination=arrival_time_at_destination
            )
            return JsonResponse({
                'message': 'Train added successfully',
                'train_id': str(train.id)
            }, status=201)
        except Exception as e:
            return JsonResponse({'error': str(e)}, status=400)

@api_view(['GET'])
def train_availability(request):
    source = request.GET.get('source')
    destination = request.GET.get('destination')
    
    trains = Train.objects.filter(source=source, destination=destination)
    response_data = [
        {
            "train_id": train.id,
            "train_name": train.train_name,
            "available_seats": train.available_seats
        } for train in trains
    ]

    return JsonResponse(response_data, safe=False)


@api_view(['GET'])
def all_trains(request):
    trains = Train.objects.all()  # Fetch all trains
    response_data = [
        {
            "train_id": train.id,
            "train_name": train.train_name,
            "available_seats": train.available_seats,
            "seat_capacity": train.seat_capacity,  # Include any other fields you need
            "source": train.source,
            "destination": train.destination,
            "arrival_time_at_source": train.arrival_time_at_source,
            "arrival_time_at_destination": train.arrival_time_at_destination,
        } for train in trains
    ]
    
    return JsonResponse(response_data, safe=False)
@api_view(['PUT'])
def update_train(request, train_id):
    try:
        train = Train.objects.get(id=train_id)
        data = json.loads(request.body)
        
        # Update train details
        train.train_name = data.get('train_name', train.train_name)
        train.source = data.get('source', train.source)
        train.destination = data.get('destination', train.destination)
        train.seat_capacity = data.get('seat_capacity', train.seat_capacity)
        train.arrival_time_at_source = data.get('arrival_time_at_source', train.arrival_time_at_source)
        train.arrival_time_at_destination = data.get('arrival_time_at_destination', train.arrival_time_at_destination)
        
        train.save()
        
        return JsonResponse({'message': 'Train updated successfully'}, status=200)
    except Train.DoesNotExist:
        return JsonResponse({'message': 'Train not found'}, status=404)
    except Exception as e:
        return JsonResponse({'message': f'Failed to update train: {str(e)}'}, status=500)

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def book_train(request, train_id):
    # Get the authenticated user's ID instead of relying on `user_id` from request data.
    print("Request Headers:", request.headers)  # This should show all headers
    
    # Access the Authorization header
    token = request.META.get('HTTP_AUTHORIZATION')
    print("JWT Token:", token)  #
    
    user_id = request.user.id
    no_of_seats = int(request.data.get('no_of_seats'))

    # Fetch the user and train objects
    try:
        user = User.objects.get(id=user_id)
        train = Train.objects.get(id=train_id)
    except User.DoesNotExist:
        return Response({"message": "User not found"}, status=status.HTTP_404_NOT_FOUND)
    except Train.DoesNotExist:
        return Response({"message": "Train not found"}, status=status.HTTP_404_NOT_FOUND)

    # Check if enough seats are available
    if no_of_seats > train.available_seats:
        return Response({"message": "Not enough seats available"}, status=status.HTTP_400_BAD_REQUEST)

    # Assume seat numbers are consecutive and auto-assigned for simplicity
    # Adjusted the seat allocation to avoid overlaps
    seat_numbers = []
    for i in range(no_of_seats):
        seat_number = train.seat_capacity - train.available_seats + 1 + i
        seat_numbers.append(seat_number)

    # Create a booking
    booking = Booking.objects.create(
        user=user,
        train=train,
        no_of_seats=no_of_seats,
        seat_numbers=seat_numbers
    )

    # Update train's available seats
    train.available_seats -= no_of_seats
    train.save()

    return Response({
        "message": "Seat booked successfully",
        "booking_id": booking.id,
        "seat_numbers": seat_numbers
    }, status=status.HTTP_201_CREATED)