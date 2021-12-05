import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  private generateHeaders() {
    return {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  }

  verifyAuth() {
    return this.http.get(`${environment.baseUrl}/user/auth/verify`, { headers: this.generateHeaders() });
  }

  auth(data: { username: string, password: string }) {
    return this.http.post(`${environment.baseUrl}/user/auth`, data);
  }

  create(data: { username: string, email: string, password: string }) {
    return this.http.post(`${environment.baseUrl}/user`, data);
  }
}
