import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TicketService } from '../../ticket.service';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-ticket-create',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './ticket-create.component.html'
})
export class TicketCreateComponent {
  title = '';
  description = '';

  constructor(private ticketService: TicketService, private router: Router) {}

  createTicket() {
    this.ticketService.createTicket({
      title: this.title,
      description: this.description,
      status: 'open'
    }).subscribe(() => {
      this.router.navigate(['/tickets']);
    });
  }
}
