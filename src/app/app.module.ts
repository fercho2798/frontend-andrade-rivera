import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {ButtonModule} from 'primeng/button';
import {InputSwitchModule} from 'primeng/inputswitch';
import { FormsModule } from '@angular/forms';
import {InputTextModule} from 'primeng/inputtext';
import {PasswordModule} from 'primeng/password';
import {MenubarModule} from 'primeng/menubar';
import {SlideMenuModule} from 'primeng/slidemenu';
import {CardModule} from 'primeng/card';
import {StepsModule} from 'primeng/steps';



import { AccesDeniedComponent } from './acces-denied/acces-denied.component';
import { UnderMaintenanceComponent } from './under-maintenance/under-maintenance.component';
import { ProjectComponent } from './project/project.component';
import { AuthorComponent } from './author/author.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { MainComponent } from './main/main.component';
import { NavbarComponent } from './navbar/navbar.component';



@NgModule({
  declarations: [
    AppComponent,
    ProjectComponent,
    AuthorComponent,
    NotFoundComponent,
    MainComponent,
    AccesDeniedComponent,
    UnderMaintenanceComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    InputSwitchModule, 
    FormsModule,
    InputTextModule,
    PasswordModule,
    MenubarModule,
    SlideMenuModule,
    CardModule,
    StepsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
