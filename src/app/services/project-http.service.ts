import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { identifierModuleUrl } from '@angular/compiler';
import { ProjectModel } from '../models/project.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectHttpService {

  constructor(private httpClient:HttpClient) {


   }

   getAll(): Observable<ProjectModel>{
     return this.httpClient.get('http://backend-andrade-rivera.test/api/v1/public/projects')
   }

  getOne(id: number){
    const url = 'http://backend-andrade-rivera.test/api/v1/public/projects'+id;
    return this.httpClient.get(url)
  }

  create(project:ProjectModel){
    const url = 'http://backend-andrade-rivera.test/api/v1/public/projects';
    return this.httpClient.post(url,project)
  }

  update(id:number, project:ProjectModel){
    const url = 'http://backend-andrade-rivera.test/api/v1/public/projects'+id;
    return this.httpClient.put(url,project)
  }

  delete(id:number){
    const url = 'http://backend-andrade-rivera.test/api/v1/public/projects'+id;
    return this.httpClient.delete(url)
  }
  
}
