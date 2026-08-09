import { Routes } from '@angular/router';
import { TripList } from './trip-list/trip-list';
import { TripEdit } from './trip-edit/trip-edit';
import { TripAdd } from './trip-add/trip-add';

export const routes: Routes = [
  {
    path: '',
    component: TripList
  },
  {
    path: 'trips',
    component: TripList
  },
  {
    path: 'edit-trip/:code',
    component: TripEdit
  },
  {
  path: 'trip-add',
  component: TripAdd
}
];