# Generated by Django 5.1.2 on 2024-10-27 12:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0005_alter_booking_booking_id'),
    ]

    operations = [
        migrations.AlterField(
            model_name='booking',
            name='booking_id',
            field=models.CharField(default='cfc9f938-7665-4eb1-8', max_length=20, unique=True),
        ),
    ]
