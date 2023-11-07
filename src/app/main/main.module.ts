import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import { HtmlComponent } from './features/html/html.component';
import { JavascriptComponent } from './features/javascript/javascript.component';
import { LayoutComponent } from './layout/layout.component';
import { MainRoutingModule } from './main-routing.module';
import { NgModule } from '@angular/core';
import { PrimengModule } from '../primeng/primeng.module';
import { SharedModule } from '../shared/shared.module';
import { JavascriptExercisesComponent } from './features/exercises/javascript-exercises/javascript-exercises.component';
import { AngularExercisesComponent } from './features/exercises/angular-exercises/angular-exercises.component';

@NgModule({
  declarations: [
    LayoutComponent,
    DashboardComponent,
    HtmlComponent,
    JavascriptComponent,
    JavascriptExercisesComponent,
    AngularExercisesComponent,
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
