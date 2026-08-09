import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { TripData } from '../services/trip-data';
import { Trip } from '../models/trip-model';

@Component({
  selector: 'app-trip-add',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './trip-add.html',
  styleUrl: './trip-add.scss'
})
export class TripAdd {

  trip: Trip = {
    name: '',
    destination: '',
    duration: '',
    price: '',
    description: ''
  };

  constructor(
    private tripData: TripData,
    private router: Router
  ) {}

  saveTrip(): void {
    this.tripData.addTrip(this.trip).subscribe({
      next: () => {
        alert('Trip added successfully!');
        this.router.navigate(['/trips']);
      },
      error: (error) => {
        console.error('Error adding trip:', error);
        alert('Error adding trip.');
      }
    });
  }
}