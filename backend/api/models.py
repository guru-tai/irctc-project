import uuid
from django.db import models
from django.contrib.auth.models import User
class Train(models.Model):
    train_name = models.CharField(max_length=255)
    source = models.CharField(max_length=255)
    destination = models.CharField(max_length=255)
    seat_capacity = models.IntegerField()
    available_seats = models.IntegerField()
    arrival_time_at_source = models.TimeField(default='00:00:00')  # Default time
    arrival_time_at_destination = models.TimeField(default='00:00:00')

    def __str__(self):
        return self.train_name

class Booking(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    train = models.ForeignKey(Train, on_delete=models.CASCADE)
    no_of_seats = models.IntegerField()
    seat_numbers = models.JSONField()  # Store the seat numbers as a list
    def __str__(self):
        return f"Booking {self.booking_id} by {self.user.username}"