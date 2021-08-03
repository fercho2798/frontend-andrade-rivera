import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthorComponent } from './author/author.component';
import { MainComponent } from './main/main.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProjectComponent } from './project/project.component';
import { AuthRoutingModule } from './auth/auth-routing.module';

const routes: Routes = [


  {path:'', component: MainComponent},

  {path:'projects', component:ProjectComponent},
  
  {path:'authors', component:AuthorComponent},

  
  
  {path: 'notFount', component: NotFoundComponent},

  {path: '**', redirectTo: 'notFount'} 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    AuthRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
