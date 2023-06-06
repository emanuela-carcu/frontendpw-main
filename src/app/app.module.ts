import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms'; // importa ReactiveFormsModule aici

import { AppComponent } from './app.component';
import { ContactComponent } from './components/contact/contact.component';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { ServicesComponent } from './components/services/services.component';
import { LoginComponent } from './components/login/login.component';
import { HireComponent } from './components/hire/hire.component';
import { SignupComponent } from './components/signup/signup.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    NavbarComponent,
    AboutComponent,
    HomeComponent,
    ServicesComponent,
    LoginComponent,
    HireComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule// adaugă ReactiveFormsModule aici
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
