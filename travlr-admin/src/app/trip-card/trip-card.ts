import { Component, Input } from '@angular/core';
import { Trip } from '../models/trip-model';

@Component({
  selector: 'app-trip-card',
  imports: [],
  templateUrl: './trip-card.html',
  styleUrl: './trip-card.scss'
})
export class TripCard {
  @Input() trip!: Trip;
}