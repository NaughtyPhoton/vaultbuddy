import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { CoachSessionComponent } from './coach/coach-session/coach-session.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AppRoutingModule } from './app-routing.module'


@NgModule({
  imports:      [ 
    BrowserModule, 
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    AppRoutingModule,
    FlexLayoutModule
    ],
  declarations: [ 
    AppComponent, 
    LoginComponent, 
    SignupComponent, 
    CoachSessionComponent, 
    WelcomeComponent
    ],
  bootstrap:    [ 
    AppComponent
    ]
})
export class AppModule { }
