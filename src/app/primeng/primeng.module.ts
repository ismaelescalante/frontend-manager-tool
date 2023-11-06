import { ButtonModule } from 'primeng/button'
import { CommonModule } from '@angular/common';
import { DragDropModule } from 'primeng/dragdrop';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ButtonModule,
    DragDropModule
  ]
})
export class PrimengModule { }
