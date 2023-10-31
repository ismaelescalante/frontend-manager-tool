import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { MainRoutingModule } from './main-routing.module';
import { NgModule } from '@angular/core';
import { PrimengModule } from '../primeng/primeng.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    LayoutComponent,
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    PrimengModule,
    SharedModule
  ]
})
export class MainModule { }
