import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthorModel } from '../models/author.model';

@Injectable({
  providedIn: 'root'
})
export class AuthorHttpService {


  constructor(private httpClient: HttpClient) {


  }

  getAll(): Observable< AuthorModel> {
    return this.httpClient.get('http://backend-andrade-rivera.test/api/v1/public/projects/1/authors')
  }

  getOne(id: number) {
    const url = 'http://backend-andrade-rivera.test/api/v1/public/projects/1/authors/' + id;
    return this.httpClient.get(url)
  }

  create(author: AuthorModel) {
    const url = 'http://backend-andrade-rivera.test/api/v1/public/projects/1/authors';
    return this.httpClient.post(url, author)
  }

  update(id: number, author: AuthorModel) {
    const url = 'http://backend-andrade-rivera.test/api/v1/public/projects/1/authors/' + id;
    return this.httpClient.put(url, author)
  }

  delete(id: number) {
    const url = 'http://backend-andrade-rivera.test/api/v1/public/projects/1/authors/' + id;
    return this.httpClient.delete(url)
  }
}