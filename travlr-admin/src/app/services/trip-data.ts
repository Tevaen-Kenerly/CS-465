import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Trip } from '../models/trip-model';

@Injectable({
  providedIn: 'root'
})
export class TripData {

  private apiUrl = 'http://localhost:3000/api/trips';

  constructor(private http: HttpClient) {}

  getTrips(): Observable<Trip[]> {
    return this.http.get<Trip[]>(this.apiUrl);
  }

  getTrip(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  addTrip(trip: Trip): Observable<any> {
    return this.http.post<any>(this.apiUrl, trip);
  }

  updateTrip(trip: any): Observable<any> {
    return this.http.put<any>(
      `${this.apiUrl}/${trip._id}`,
      trip
    );
  }

  deleteTrip(id: string): Observable<any> {
    return this.http.delete<any>(
      `${this.apiUrl}/${id}`
    );
  }
}