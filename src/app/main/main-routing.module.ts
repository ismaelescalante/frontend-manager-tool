import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { ItineraryComponent } from './features/itinerary/itinerary.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: "",
    component: DashboardComponent
  }
 {path: 'itinerario', component: ItineraryComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
