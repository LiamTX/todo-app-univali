import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  create(data: { username: string, email: string, password: string }) {
    return this.http.post(`${environment.baseUrl}/user`, data);
  }
}
