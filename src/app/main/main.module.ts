import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import { ItineraryComponent } from './features/itinerary/itinerary.component';
import { LayoutComponent } from './layout/layout.component';
import { MainRoutingModule } from './main-routing.module';
import { NgModule } from '@angular/core';
import { PrimengModule } from '../primeng/primeng.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    LayoutComponent,
    ItineraryComponent,
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    PrimengModule,
    SharedModule,
    FormsModule
  ]
})
export class MainModule { }
