import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  // Get the user token for authorization
  private generateHeaders() {
    return {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  }

  // Verify user authentication endpoint
  verifyAuth() {
    return this.http.get(`${environment.baseUrl}/user/auth/verify`, { headers: this.generateHeaders() });
  }

  // Login endpoint
  auth(data: { username: string, password: string }) {
    return this.http.post(`${environment.baseUrl}/user/auth`, data);
  }

  // Register endpoint
  create(data: { username: string, email: string, password: string }) {
    return this.http.post(`${environment.baseUrl}/user`, data);
  }
}
