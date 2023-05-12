import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GetdataComponent } from './components/getdata/getdata.component';

import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { SubjectComponent } from './components/subject/subject.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { AuthInterceptor } from './interceptor/auth.interceptor';
import {MatTableModule} from '@angular/material/table';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from "@angular/forms";
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    GetdataComponent,
    SubjectComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTableModule,
    FlexLayoutModule,
    MatInputModule,
    FormsModule,
    MatIconModule
  ],
  providers: [{provide:HTTP_INTERCEPTORS,useClass:AuthInterceptor,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
