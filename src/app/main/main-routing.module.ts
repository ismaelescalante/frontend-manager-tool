import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { ItineraryComponent } from './features/itinerary/itinerary.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { ProfileComponent } from './features/profile/profile.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
  {
    path: 'itinerario',
    component: ItineraryComponent
  },
  {
    path: 'perfil/:id',
    component: ProfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
