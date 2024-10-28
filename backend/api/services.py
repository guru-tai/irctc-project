from django.db import transaction
from .models import Train, Booking

def book_seat(train_id, user_id):
    with transaction.atomic():
        train = Train.objects.select_for_update().get(id=train_id)
        if train.available_seats > 0:
            train.available_seats -= 1
            train.save()
            Booking.objects.create(user_id=user_id, train=train)
        else:
            raise Exception("No available seats to book.")

# You can add more service functions here as needed
