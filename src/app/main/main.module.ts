import { CommonModule } from '@angular/common';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ItineraryComponent } from './features/itinerary/itinerary.component';
import { LayoutComponent } from './layout/layout.component';
import { MainRoutingModule } from './main-routing.module';
import { NgModule } from '@angular/core';
import { PrimengModule } from '../primeng/primeng.module';
import { SharedModule } from '../shared/shared.module';
import { ProfileComponent } from './features/profile/profile.component';

@NgModule({
  declarations: [LayoutComponent, ItineraryComponent, DashboardComponent, ProfileComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    PrimengModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
})
export class MainModule {}
