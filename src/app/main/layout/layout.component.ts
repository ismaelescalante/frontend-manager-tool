import { Component, OnInit, inject } from '@angular/core';
import { LayoutService } from './layout.service';


@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
  
  
export class LayoutComponent implements OnInit {

  private layoutService = inject(LayoutService);


  ngOnInit(): void {
    this.layoutService.getProgress('1').subscribe((m) => console.log(m));
  }



}
