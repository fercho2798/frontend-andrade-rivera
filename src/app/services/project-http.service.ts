import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { ServerResponse } from '../models/server-response';
import { Handler } from '../exceptions/handler';
import { environment } from '../../environments/environment';
import { ProjectModel } from '../models';
import { MessageService } from './message.service';
@Injectable({
  providedIn: 'root'
})
export class ProjectHttpService {

  API_URL_PRIVATE: string = environment.API_URL_PRIVATE;
  API_URL_PUBLIC: string = environment.API_URL_PUBLIC;

  constructor(private httpClient: HttpClient, private messageService:MessageService) {


  }

 //api for windows

  // getAll() {
  //   return this.httpClient.get('http://backend-andrade-rivera.test/api/v1/private/projects');
  // }


  // getOne(id: number) {

  //   const url = 'http://backend-andrade-rivera.test/api/v1/private/projects/' + id;

  //   return this.httpClient.get(url);
  // }

  // create(project: ProjectModel) {

  //   const url = 'http://backend-andrade-rivera.test/api/v1/public/projects' ;

  //   return this.httpClient.post(url, project);
  // }


  // update(id: number | undefined, project: ProjectModel) {

  //   const url = 'http://backend-andrade-rivera.test/api/v1/private/projects/' + id;

  //   return this.httpClient.put(url, project);
  // }


  // delete(id: number | undefined) {

  //   const url = 'http://backend-andrade-rivera.test/api/v1/public/projects/' + id;

  //   return this.httpClient.delete(url);
  // }



  getAll(): Observable<ServerResponse> {
    const url = this.API_URL_PUBLIC + '/projects'
    return this.httpClient.get<ServerResponse>(url)

    .pipe (
      map(response => response),
      catchError(Handler.render)
     );
   
 }


  getOne(id: number | undefined): Observable<ServerResponse> {

    //const url this.API_URL_PRIVATE + /projects;

    const url = this.API_URL_PUBLIC +'/projects/' + id;

    return this.httpClient.get<ServerResponse>(url)
    .pipe (
      map(response => response),
      catchError(Handler.render)
     );
    
  }

  store(project: ProjectModel | undefined): Observable<ServerResponse> {

    const url = this.API_URL_PUBLIC +'/projects' ;

    return this.httpClient.post<ServerResponse>(url, project)
    .pipe (
      map(response => response),
      catchError(Handler.render)
     );
  }


  update(id: number | undefined, project: ProjectModel): Observable<ServerResponse> {

    const url = this.API_URL_PUBLIC +'/projects/' + id;

    return this.httpClient.put<ServerResponse>(url, project)
    .pipe (
      map(response => response),
      catchError(Handler.render)
     );
  }


  delete(id: number | undefined): Observable<ServerResponse> {

    const url = this.API_URL_PUBLIC +'/projects/' + id;

    return this.httpClient.delete<ServerResponse>(url)
    .pipe (
      map(response => response),
      catchError(Handler.render)
     );
  }


}
