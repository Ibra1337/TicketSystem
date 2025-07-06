import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TicketService, Ticket } from '../../ticket.service';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-ticket-detail',
  standalone: true,
  imports: [FormsModule, RouterModule],  
  templateUrl: './ticket-detail.component.html',
})
export class TicketDetailComponent implements OnInit {
  ticket?: Ticket;

  constructor(private route: ActivatedRoute, private ticketService: TicketService) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.ticketService.getTicket(id).subscribe(ticket => {
      this.ticket = ticket;
    });
  }

  updateStatus(newStatus: string) {
    if (!this.ticket) return;
    this.ticket.status = newStatus;
    this.ticketService.updateTicket(this.ticket).subscribe();
  }
}
