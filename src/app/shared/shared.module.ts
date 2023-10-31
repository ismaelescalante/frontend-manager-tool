import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PrimengModule } from '../primeng/primeng.module';
import { SidebarComponent } from './menu/sidebar/sidebar.component';

@NgModule({
  declarations: [
    SidebarComponent,
  ],
  imports: [
    CommonModule,
    PrimengModule
  ],
  exports: [
    SidebarComponent
  ]
})
export class SharedModule { }
