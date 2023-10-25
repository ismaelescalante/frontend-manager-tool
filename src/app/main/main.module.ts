import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { MainRoutingModule } from './main-routing.module';
import { NgModule } from '@angular/core';
import { PrimengModule } from '../primeng/primeng.module';
import { SharedModule } from 'primeng/api';
import { SidebarComponent } from '../shared/menu/sidebar/sidebar.component';

@NgModule({
  declarations: [
    LayoutComponent,
    SidebarComponent,
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    PrimengModule,
    SharedModule
  ]
})
export class MainModule { }
