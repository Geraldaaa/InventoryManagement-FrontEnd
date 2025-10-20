import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8080/auth'; // vendos URL-n e backend-it tënd

  constructor(private http: HttpClient) {}

  // 🔹 Login request
  login(credentials: { username: string; password: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, credentials);
  }

  // 🔹 Register request
  register(userData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, userData);
  }

  setSession(authResult: any) {
    localStorage.setItem('token', authResult.token);
    localStorage.setItem('role', authResult.role);
    localStorage.setItem('username', authResult.username);
  }

  getRole(): string | null {
    return localStorage.getItem('role');
  }

  logout() {
    localStorage.clear();
  }

}
