import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Authentication {

  private apiBaseUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  login(user: any) {
    return this.http.post(
      this.apiBaseUrl + '/login',
      user
    );
  }

}