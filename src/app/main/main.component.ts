import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  value3: undefined;

  ngOnInit() {
  
  }
  goCNN() {
    window.location.href='projects';
}

}
