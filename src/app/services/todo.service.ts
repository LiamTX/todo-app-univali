import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) { }

  private generateHeaders() {
    return {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  }

  list() {
    return this.http.get(`${environment.baseUrl}/todo`, { headers: this.generateHeaders() });
  }

  create(data: { description: string }) {
    return this.http.post(`${environment.baseUrl}/todo`, data, { headers: this.generateHeaders() });
  }

  update(id: string, data: { description?: string, done?: boolean }) {
    return this.http.put(`${environment.baseUrl}/todo/${id}`, data, { headers: this.generateHeaders() });
  }

  delete(id: string) {
    return this.http.delete(`${environment.baseUrl}/todo/${id}`, { headers: this.generateHeaders() });
  }
}
