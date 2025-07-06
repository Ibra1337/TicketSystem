import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login.component';
import { TicketListComponent } from './tickets/ticket-list/ticket-list.component';
import { TicketCreateComponent } from './tickets/ticket-create/ticket-create.component';
import { TicketDetailComponent } from './tickets/ticket-detail/ticket-detail.component';
import { RegisterComponent } from './auth/register/register.component'; // Import the RegisterComponent
export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register',component:  RegisterComponent},
  { path: 'tickets', component: TicketListComponent },
  { path: 'tickets/create', component: TicketCreateComponent },
  { path: 'tickets/:id', component: TicketDetailComponent }
];
