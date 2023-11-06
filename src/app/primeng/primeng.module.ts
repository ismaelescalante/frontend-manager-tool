import { ButtonModule } from 'primeng/button'
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { KnobModule } from 'primeng/knob';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ButtonModule,
    KnobModule
  ]
})
export class PrimengModule { }
