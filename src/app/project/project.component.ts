import { Component, OnInit } from '@angular/core';
import { ProjectModel } from '../models/project.model';
import { ProjectHttpService } from '../services/project-http.service';


@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
 
  

 
  project: ProjectModel = {};
  projects:ProjectModel[]=[];

  constructor(private projectHttpService:ProjectHttpService) {


   }
 
  ngOnInit() {
  this.getProjects();
  }

  getProjects():void{
    this.projectHttpService.getAll().subscribe(
      response => {
        console.log(response);
        return this.project = response['data'];

      },
      error=>{
        console.log(error);
      }
    )
  }
  getProject():void{
    this.projectHttpService.getOne(this.project.id).subscribe(
      response => {
        console.log(response);
        return this.project = response['data'];

      },
      error=>{
        console.log(error);
      }
    )
  }
  postProjects():void{
    this.projectHttpService.create(this.project).subscribe(
      response => {
        console.log(response);
        return this.project = response['data'];

      },
      error=>{
        console.log(error);
      }
    )
  }
  updateProjects():void{
    this.projectHttpService.update(this.project.id, this.project).subscribe(
      response => {
        console.log(response);
        return this.project = response['data'];

      },
      error=>{
        console.log(error);
      }
    )
  }
  deleteProjects():void{
    this.projectHttpService.delete(this.project.id).subscribe(
      response => {
        console.log(response);
        return this.project = response['data'];

      },
      error=>{
        console.log(error);
      }
    )
  }

}
