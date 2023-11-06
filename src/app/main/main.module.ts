import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { MainRoutingModule } from './main-routing.module';
import { NgModule } from '@angular/core';
import { PrimengModule } from '../primeng/primeng.module';
import { SharedModule } from '../shared/shared.module';
import { ItineraryComponent } from './features/itinerary/itinerary.component';

@NgModule({
  declarations: [
    LayoutComponent,
    ItineraryComponent,
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    PrimengModule,
    SharedModule
  ]
})
export class MainModule { }
