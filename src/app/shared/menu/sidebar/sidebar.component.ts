import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
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
}
