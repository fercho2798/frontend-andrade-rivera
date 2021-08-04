import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthorModel } from '../models/author.model';
import { AuthorHttpService } from '../services/author-http.service';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {

  selectedAuthor: AuthorModel = {};
  authors:AuthorModel[]=[];
  formAuthor: FormGroup;
  constructor(private authorHttpService:AuthorHttpService, private formBuilder: FormBuilder) {
    this.formAuthor = this.newFormAuthor();

   }
 
  ngOnInit() {
  this.getAuthors();
  this. getAuthor();
  }

  newFormAuthor(): FormGroup {
    return this.formBuilder.group(
      {
        id: [null],
        project: [null],
        names: [null, ],
        email: [null],
        phone: [null],
        identification: [null],
        age:[null]


      }
    )
  }




  getAuthors(): void {

    this.authorHttpService.getAll().subscribe(

      response => {

        this.authors = response['data'] as AuthorModel[];
      },

      error => {
        console.log(error)
      }
    );
  }
  getAuthor(): void {
    const id = 1;
    this.authorHttpService.getOne(id).subscribe(

      response => {

        this.selectedAuthor = response['data'];
      },

      error => {
        console.log(error)
      }
    );
  }
  
  createAuthor(): void {

    this.authorHttpService.create(this.selectedAuthor).subscribe(

      response => {
        console.log(response)
      },

      error => {
        console.log(error)
      }
    );
  }

  updateAuthor(author: AuthorModel): void {

    this.authorHttpService.update(author.id, author).subscribe(

      response => {
        console.log(response)
      },

      error => {
        console.log(error)
      }
    );
  }

  deleteAuthor(author: AuthorModel): void {

    this.authorHttpService.delete(author.id).subscribe(

      response => {
        console.log(response)
        this.removeAuthor(author);
      },

      error => {
        console.log(error)
      }
    );
  }

  removeAuthor(author: AuthorModel){
    this.authors = this.authors.filter(element => element.id !== author.id);
  }


  selectAuthor(author: AuthorModel) {
    console.log(author)
    this.formAuthor.patchValue(author)
  }

  onSubmit(){
    console.log('subido!')
  }

  get idField(){
    return this.formAuthor.controls['id']
  }
  get codeField(){
    return this.formAuthor.controls['code']
  }
}

