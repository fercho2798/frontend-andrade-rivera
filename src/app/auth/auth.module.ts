  
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';

import {ButtonModule} from 'primeng/button';
import {InputSwitchModule} from 'primeng/inputswitch';
import { FormsModule } from '@angular/forms';
import {InputTextModule} from 'primeng/inputtext';
import {PasswordModule} from 'primeng/password';
import {MenubarModule} from 'primeng/menubar';
import {TabMenuModule} from 'primeng/tabmenu';
import { MenuModule } from 'primeng/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
  ],
  exports :[
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AuthRoutingModule,
    ButtonModule,
    InputSwitchModule, 
    FormsModule,
    InputTextModule,
    PasswordModule,
    MenubarModule,
    TabMenuModule,
    MenuModule,
    BrowserAnimationsModule
  ]
})
export class AuthModule { }