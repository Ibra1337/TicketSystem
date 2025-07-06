import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  username: string = '';
  password: string = '';
  confirmPassword: string = '';
  error: string = '';
  success: string = '';

  constructor(private authService: AuthService) {}

  register() {
    if (this.password !== this.confirmPassword) {
      this.error = 'Passwords do not match';
      return;
    }

    this.authService.register(this.username, this.password).subscribe({
      next: () => {
        this.success = 'Registration successful! You can now log in.';
        this.error = '';
        this.username = '';
        this.password = '';
        this.confirmPassword = '';
      },
      error: (err) => {
        this.error = 'Registration failed. Try again.';
        console.error(err);
      },
    });
  }
}
