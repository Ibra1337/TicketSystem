from django.contrib.auth.models import User
from django.shortcuts import get_object_or_404

from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import Ticket
from .serializers import TicketSerializer


class TicketListCreate(APIView):
    """
    GET: List tickets created by the authenticated user.
    POST: Create a new ticket.
    """
    permission_classes = [IsAuthenticated]

    def get(self, request):
        tickets = Ticket.objects.filter(created_by=request.user)
        serializer = TicketSerializer(tickets, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = TicketSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(created_by=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class TicketDetail(APIView):
    """
    GET: Retrieve a ticket.
    PATCH: Update a ticket.
    DELETE: Delete a ticket.
    """
    permission_classes = [IsAuthenticated]

    def get(self, request, ticketId):
        ticket = get_object_or_404(Ticket, pk=ticketId)
        serializer = TicketSerializer(ticket)
        return Response(serializer.data)

    def patch(self, request, ticketId):
        ticket = get_object_or_404(Ticket, pk=ticketId)
        serializer = TicketSerializer(ticket, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, ticketId):
        ticket = get_object_or_404(Ticket, pk=ticketId)
        ticket.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


@api_view(['POST'])
@permission_classes([AllowAny])
def register(request):
    """
    POST: Register a new user.
    """
    username = request.data.get('username')
    password = request.data.get('password')

    if not username or not password:
        return Response(
            {'error': 'Username and password are required.'},
            status=status.HTTP_400_BAD_REQUEST
        )

    if User.objects.filter(username=username).exists():
        return Response(
            {'error': 'Username already exists.'},
            status=status.HTTP_400_BAD_REQUEST
        )

    User.objects.create_user(username=username, password=password)
    return Response({'message': 'User created successfully.'}, status=status.HTTP_201_CREATED)
