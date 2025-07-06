from rest_framework import serializers
from .models import Ticket


class TicketSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ticket
        fields = ['id', 'title', 'description', 'status', 'created_at', 'created_by']
        read_only_fields = ['id', 'created_at', 'created_by']  # 👈 created_by must be read-only!
