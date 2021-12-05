import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) { }

  // Get the user token for authorization
  private generateHeaders() {
    return {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  }

  // List endpoint
  list() {
    return this.http.get(`${environment.baseUrl}/todo`, { headers: this.generateHeaders() });
  }

  // Create endpoint
  create(data: { description: string }) {
    return this.http.post(`${environment.baseUrl}/todo`, data, { headers: this.generateHeaders() });
  }

  // Update endpoint
  update(id: string, data: { description?: string, done?: boolean }) {
    return this.http.put(`${environment.baseUrl}/todo/${id}`, data, { headers: this.generateHeaders() });
  }

  delete(id: string) {
    return this.http.delete(`${environment.baseUrl}/todo/${id}`, { headers: this.generateHeaders() });
  }
}
