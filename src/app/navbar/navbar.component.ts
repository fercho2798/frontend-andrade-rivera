import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  items: MenuItem[] = [];

  value3: undefined;

  ngOnInit() {
      this.items = [
        
          {
              label:'Fernando Rivera',
              icon:'pi pi-fw pi-user',
          
          },
          {
              label:'Salir',
              icon:'pi pi-fw pi-power-off'
          }
      ];
      
  }

  goCNN() {
    window.location.href='login';
}

goinit() {
  window.location.href='';
}
}
