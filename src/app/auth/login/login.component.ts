import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  items: MenuItem[] = [];

  constructor() { }

  ngOnInit(): void {
    this.items = [
        
      {
          label:'Fernando Rivera',
          icon:'pi pi-fw pi-user',
      
      },
      {
          label:'Quit',
          icon:'pi pi-fw pi-power-off'
      }
  ];
  }

}
