# Generated by Django 5.1.2 on 2024-10-27 12:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0004_remove_booking_booking_time_booking_booking_id_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='booking',
            name='booking_id',
            field=models.CharField(default='6b1eb365-a0d2-4fd5-8', max_length=20, unique=True),
        ),
    ]
