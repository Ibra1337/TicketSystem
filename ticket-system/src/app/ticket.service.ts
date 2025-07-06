import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ENDPOINTS } from './endpoints';

export interface Ticket {
  id: number;
  title: string;
  description: string;
  status: string;
}

@Injectable({ providedIn: 'root' })
export class TicketService {
  constructor(private http: HttpClient) {}

  getTickets(): Observable<Ticket[]> {
    return this.http.get<Ticket[]>(ENDPOINTS.TICKETS.BASE);
  }

  getTicket(id: number): Observable<Ticket> {
    return this.http.get<Ticket>(ENDPOINTS.TICKETS.BY_ID(id));
  }

  createTicket(ticket: Partial<Ticket>): Observable<Ticket> {
    return this.http.post<Ticket>(ENDPOINTS.TICKETS.BASE, ticket);
  }

  updateTicket(ticket: Ticket): Observable<Ticket> {
    return this.http.patch<Ticket>(ENDPOINTS.TICKETS.BY_ID(ticket.id), ticket); 
  }

  getUserTickets(): Observable<Ticket[]> {
    return this.http.get<Ticket[]>(ENDPOINTS.TICKETS.USER);
  }

  deleteTicket(id: number): Observable<void> {
    return this.http.delete<void>(ENDPOINTS.TICKETS.BY_ID(id));
  }
}
