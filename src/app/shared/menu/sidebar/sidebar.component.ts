import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  public userId?: string;

  constructor(private _authService: AuthService, private _router: Router) {
    this.userId = this._authService.currentUser?.userId
  }


  public courses = [
    {label: 'Itinerario', icon: 'pi pi-compass', items: [
      {
          label: 'HTML & CSS',
          routerLink: ['/html']
      },
      {
          label: 'Javascript',
          routerLink: ['/javascript']
      },
      {
          label: 'Metodología',
         
      },
      {
          label: 'Angular',
          
      }
  ]}
  ]

  public exercises = [
    {label: 'Ejercicios', icon: 'pi pi-pencil', items: [
      {label: 'Javascript', routerLink: ['/ejercicios/javascript']},
      {label: 'Angular', routerLink: ['/ejercicios/angular']}
    ]}
  ]

  logout() {
    this._authService.logout()
    this._router.navigate(['login']);
  }


}
