import { CommonModule } from '@angular/common';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import { LayoutComponent } from './layout/layout.component';
import { MainRoutingModule } from './main-routing.module';
import { NgModule } from '@angular/core';
import { PrimengModule } from '../primeng/primeng.module';
import { ProfileComponent } from './features/profile/profile.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    LayoutComponent,
    DashboardComponent,
    ProfileComponent,
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    PrimengModule,
    SharedModule,
    FormsModule,
  ],
})
export class MainModule {}
