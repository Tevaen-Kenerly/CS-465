import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TripData } from '../services/trip-data';
import { TripCard } from '../trip-card/trip-card';

@Component({
  selector: 'app-trip-list',
  standalone: true,
  imports: [CommonModule, TripCard],
  templateUrl: './trip-list.html',
  styleUrl: './trip-list.scss'
})
export class TripList implements OnInit {

  trips: any[] = [];

  constructor(
    private tripData: TripData,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.tripData.getTrips().subscribe({
      next: (data) => {
        console.log('Trips loaded:', data);
        this.trips = data;
        this.cdr.detectChanges();
      },
      error: (error) => {
        console.error('Error loading trips:', error);
      }
    });
  }
}