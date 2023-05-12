import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
const headers=new HttpHeaders().set("customheader","mythili")
  // // Getting token form local storage
  // const token = localStorage.getItem('token');
  // // Create headers and set token header
  // const headers: HttpHeaders = new HttpHeaders().set('token', token);
const authreq=request.clone({headers})
    return next.handle(authreq);
  }
}


//ng g interceptor auth

