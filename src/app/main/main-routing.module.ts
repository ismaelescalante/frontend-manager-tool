import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from '../auth/login/login.component';
import { NgModule } from '@angular/core';
import { ItineraryComponent } from './features/itinerary/itinerary.component';

const routes: Routes = [
 {path: 'itinerario', component: ItineraryComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
