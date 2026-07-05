import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  constructor(private http: HttpClient) {}

  sendMessage(name: string, email: string, message: string) {
  return this.http.post('http://localhost:8080/api/contact', 
    { name, email, message }, 
    { responseType: 'text' }
  );
}
}