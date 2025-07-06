from django.urls import path
from .views import TicketDetail, TicketListCreate, register

urlpatterns = [
    path('tickets/', TicketListCreate.as_view()),              
    path('tickets/<int:ticketId>/', TicketDetail.as_view()),    
    path('register/', register)                                 
]
