import { ButtonModule } from 'primeng/button'
import { CommonModule } from '@angular/common';
import { DragDropModule } from 'primeng/dragdrop';
import { KnobModule } from 'primeng/knob';
import { NgModule } from '@angular/core';
import { PanelMenuModule } from 'primeng/panelmenu';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ButtonModule,
    DragDropModule,
    KnobModule,
    PanelMenuModule
  ]
})
export class PrimengModule { }
