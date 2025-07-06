import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { ENDPOINTS } from './endpoints';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  register(username: string, password: string): Observable<any> {
    const body = { username, password };
    return this.http.post(ENDPOINTS.AUTH.REGISTER, body);
  }

  login(username: string, password: string): Observable<any> {
    const body = { username, password };
    return this.http.post<{ token: string }>(ENDPOINTS.AUTH.LOGIN, body).pipe(
      tap(response => {
        localStorage.setItem('authToken', response.token);
      })
    );
  }

  logout(): void {
    localStorage.removeItem('authToken');
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('authToken');
  }

  getToken(): string | null {
    return localStorage.getItem('authToken');
  }
}
