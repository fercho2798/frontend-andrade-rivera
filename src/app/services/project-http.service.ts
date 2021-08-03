import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { identifierModuleUrl } from '@angular/compiler';
import { ProjectModel } from '../models/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectHttpService {

  constructor(private httpClient:HttpClient) {


   }

   getAll(){
     return this.httpClient.get('backend-andrade-rivera.test/api/v1/public/projects')
   }

  getOne(id: number){
    const url = 'backend-andrade-rivera.test/api/v1/public/projects'+id;
    return this.httpClient.get(url)
  }

  create(project:ProjectModel){
    const url = 'backend-andrade-rivera.test/api/v1/public/projects';
    return this.httpClient.post(url,project)
  }

  update(id:number, project:ProjectModel){
    const url = 'backend-andrade-rivera.test/api/v1/public/projects'+id;
    return this.httpClient.put(url,project)
  }

  delete(id:number){
    const url = 'backend-andrade-rivera.test/api/v1/public/projects'+id;
    return this.httpClient.delete(url)
  }
  
}
