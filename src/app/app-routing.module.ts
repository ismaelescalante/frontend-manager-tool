import { RouterModule, Routes } from '@angular/router';

import { LayoutComponent } from './main/layout/layout.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {path: '', component: LayoutComponent, loadChildren: () => import('./main/main.module').then(m => m.MainModule)},
  {path: 'login', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
