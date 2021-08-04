import { Component, OnInit } from '@angular/core';
import { AuthorModel } from '../models/author.model';
import { AuthorHttpService } from '../services/author-http.service';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {

  author: AuthorModel = {};
  authors:AuthorModel[]=[];

  constructor(private authorHttpService:AuthorHttpService) {


   }
 
  ngOnInit() {
  this.getAuthors();
  this. getAuthor();
  }

  getAuthors():void{
    this.authorHttpService.getAll().subscribe(
      response => {
        console.log(response);
        return this.author = response['data'];

      },
      error=>{
        console.log(error);
      }
    )
  }
  getAuthor():void{
    this.authorHttpService.getOne(this.author.id).subscribe(
      response => {
        console.log(response);
        return this.author = response['data'];

      },
      error=>{
        console.log(error);
      }
    )
  }
  postAuthors():void{
    this.authorHttpService.create(this.author).subscribe(
      response => {
        console.log(response);
        return this.author = response['data'];

      },
      error=>{
        console.log(error);
      }
    )
  }
  updateAuthors():void{
    this.authorHttpService.update(this.author.id, this.author).subscribe(
      response => {
        console.log(response);
        return this.author = response['data'];

      },
      error=>{
        console.log(error);
      }
    )
  }
  deleteAuthors():void{
    this.authorHttpService.delete(this.author.id).subscribe(
      response => {
        console.log(response);
        return this.author = response['data'];

      },
      error=>{
        console.log(error);
      }
    )
  }

}

