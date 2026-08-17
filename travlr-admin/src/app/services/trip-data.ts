import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Trip } from '../models/trip-model';

@Injectable({
  providedIn: 'root'
})
export class TripData {

  private apiUrl = 'http://localhost:3000/api/trips';

  constructor(private http: HttpClient) {}

  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('travlr-token');

    return new HttpHeaders({
      Authorization: `Bearer ${token}`
    });
  }

  getTrips(): Observable<Trip[]> {
    return this.http.get<Trip[]>(this.apiUrl);
  }

  getTrip(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  addTrip(trip: Trip): Observable<any> {
    return this.http.post<any>(
      this.apiUrl,
      trip,
      { headers: this.getHeaders() }
    );
  }

  updateTrip(trip: any): Observable<any> {
    return this.http.put<any>(
      `${this.apiUrl}/${trip._id}`,
      trip,
      { headers: this.getHeaders() }
    );
  }

  deleteTrip(id: string): Observable<any> {
    return this.http.delete<any>(
      `${this.apiUrl}/${id}`,
      { headers: this.getHeaders() }
    );
  }
}