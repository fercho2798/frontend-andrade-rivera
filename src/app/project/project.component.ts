import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProjectModel } from '../models';
import { ProjectHttpService } from '../services/project-http.service';
import { MessageService } from '../services/message.service';
import { AppService } from '../services/app.service';


@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {




  selectedProject: ProjectModel = {};

  //array de libros

  projects: ProjectModel[] = [];

  formProject: FormGroup;
  themes: any;

  constructor(private projectHttpService: ProjectHttpService,
    private formBuilder: FormBuilder,
    public messageService: MessageService,
    private appService: AppService
  ) {
    this.formProject = this.newFormProject();
  }

  ngOnInit() {
    this.getProjects();
    this.getProject();
  }
  newFormProject(): FormGroup {
    return this.formBuilder.group(
      {
        id: [null],
        code: [null, [Validators.required, Validators.maxLength(5), Validators.minLength(3)]],
        date: [null, [Validators.required]],
        description: [null, [Validators.required]]
      }
    )
  }




  getProjects(): void {

    this.projectHttpService.getAll().subscribe(

      response => {

        this.projects = response.data;
      },

      error => {
        this.messageService.error(error);
      }
    );
  }
  getProject(): void {
    const id = 1;
    this.projectHttpService.getOne(id).subscribe(

      response => {

        this.selectedProject = response.data
      },

      error => {
        this.messageService.error(error);
      }
    );
  }

  storeProject(project: ProjectModel): void {

    this.projectHttpService.store(this.selectedProject).subscribe(

      response => {
        this.saveProject(response.data)
        this.messageService.success(response)
      },

      error => {
        this.messageService.error(error);
      }
    );
  }

  updateProject(project: ProjectModel): void {

    this.projectHttpService.update(project.id, project).subscribe(

      response => {
        this.saveProject(project)
        this.messageService.success(response)
      },

      error => {
        this.messageService.error(error);
      }
    );
  }

  deleteProject(project: ProjectModel): void {

    this.projectHttpService.delete(project.id).subscribe(

      response => {
        this.removeProject(project);
        this.messageService.success(response)
      },

      error => {
        this.messageService.error(error);
      }
    );
  }

  removeProject(project: ProjectModel) {
    this.projects = this.projects.filter(element => element.id !== project.id);
  }


  selectProject(project: ProjectModel) {
    console.log(project)
    this.formProject.patchValue(project)
  }

  saveProject(project: ProjectModel) {
    const index = this.projects.findIndex(element => element.id === project.id);
    if (index === -1) {
      this.projects.push(project);
    } else {
      this.projects[index] = project;
    }
  }

  onSubmit(project: ProjectModel) {
    if (this.formProject.valid) {
      if (project.id) {
        this.updateProject(project);
      } else {
        this.storeProject(project);
      }
      this.formProject.reset();
    }else{
      this.formProject.markAllAsTouched();
    }
  }

  get idField() {
    return this.formProject.controls['id'];
  }
  get codeField() {
    return this.formProject.controls['code'];
  }
  get descriptionField() {
    return this.formProject.controls['description'];
  }
  get dateField() {
    return this.formProject.controls['date'];
  }


}