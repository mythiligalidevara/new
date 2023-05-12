import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class ServService {

  constructor(private http:HttpClient) { }

  getdata(){
return this.http.get("https://jsonplaceholder.typicode.com/todos")
  }
}
