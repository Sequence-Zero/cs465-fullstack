import { Routes } from '@angular/router';
import { AddTripComponent } from './add-trip/add-trip';
import { EditTripComponent } from './edit-trip/edit-trip';
import { TripListingComponent } from './trip-listing/trip-listing';
import { Login } from './services/login/login';

export const routes: Routes = [
  { path: 'add-trip', component: AddTripComponent },
  { path: 'edit-trip', component: EditTripComponent },
  { path: 'login', component: Login },
  { path: '', component: TripListingComponent, pathMatch: 'full' }
];
