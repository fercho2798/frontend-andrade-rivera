import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  checked: boolean= false;
  items: MenuItem[] = [];
  subscription: Subscription = new Subscription;

  constructor() { }
 

  ngOnInit() {
      this.items = [
          {label: 'Step 1'},
          {label: 'Step 2'},
          {label: 'Step 3'}
      ];
  }

}
