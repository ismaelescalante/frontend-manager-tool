import { ButtonModule } from 'primeng/button'
import { CommonModule } from '@angular/common';
import { DragDropModule } from 'primeng/dragdrop';
import { KnobModule } from 'primeng/knob';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ButtonModule,
    DragDropModule,
    KnobModule
  ]
})
export class PrimengModule { }
