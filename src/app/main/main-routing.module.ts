import { RouterModule, Routes } from '@angular/router';

import { AngularExercisesComponent } from './features/exercises/angular-exercises/angular-exercises.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { HtmlComponent } from './features/html/html.component';
import { JavascriptComponent } from './features/javascript/javascript.component';
import { JavascriptExercisesComponent } from './features/exercises/javascript-exercises/javascript-exercises.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: "",
    component: DashboardComponent
  },
 {path: 'html', component: HtmlComponent },
 {path: 'javascript', component: JavascriptComponent},
 {path: 'ejercicios/javascript', component: JavascriptExercisesComponent},
 {path: 'ejercicios/angular', component: AngularExercisesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
