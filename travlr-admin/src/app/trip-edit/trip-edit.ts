import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TripData } from '../services/trip-data';

@Component({
  selector: 'app-trip-edit',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './trip-edit.html',
  styleUrl: './trip-edit.scss'
})
export class TripEdit implements OnInit {

  trip: any = {
    name: '',
    destination: '',
    duration: '',
    price: '',
    description: ''
  };

  id = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private tripData: TripData
  ) {}

  ngOnInit(): void {

    this.id = this.route.snapshot.paramMap.get('code') || '';

    console.log('ID FROM URL:', this.id);

    this.tripData.getTrip(this.id).subscribe({
      next: (data) => {
        console.log('TRIP FROM API:', data);

        this.trip = data;

        console.log('TRIP AFTER ASSIGN:', this.trip);
        console.log('NAME:', this.trip.name);
        console.log('DESTINATION:', this.trip.destination);
      },
      error: (error) => {
        console.error(error);
      }
    });

  }

  saveTrip(): void {
    this.tripData.updateTrip(this.trip).subscribe({
      next: () => {
        alert('Trip updated successfully!');
        this.router.navigate(['/trips']);
      },
      error: (error) => {
        console.error('Error updating trip:', error);
        alert('Error updating trip.');
      }
    });
  }
}