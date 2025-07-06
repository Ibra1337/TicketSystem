import { Component, OnInit } from '@angular/core';
import { Ticket, TicketService } from '../../ticket.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ticket-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './ticket-list.component.html',
})
export class TicketListComponent implements OnInit {
  tickets: Ticket[] = [];

  constructor(private ticketService: TicketService) {}

  ngOnInit() {
    this.loadTickets();
  }

  loadTickets() {
    this.ticketService.getTickets().subscribe({
      next: (data) => {
        this.tickets = data;
      },
      error: (err) => {
        console.error('Error fetching tickets', err);
      },
    });
  }

  deleteTicket(id: number) {
    if (confirm('Are you sure you want to delete this ticket?')) {
      this.ticketService.deleteTicket(id).subscribe({
        next: () => {
          this.tickets = this.tickets.filter(ticket => ticket.id !== id);
        },
        error: (err) => {
          console.error('Error deleting ticket', err);
        }
      });
    }
  }
}
