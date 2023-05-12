import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Datainterface } from '../interfaces/datainterface';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private http:HttpClient) { }


  fetchdata():Observable<Datainterface>{
return this.http.get<any>("https://jsonplaceholder.typicode.com/todos")

  }

  fetchdata1(url:any){
// let data;
//     const sub=new Subject();
//     sub.subscribe((res:any)=>{res.subscribe((a:any)=>{console.log(a);return a})})
    
// sub.next(this.http.get<any>(url))


let data;
    const sub=new Subject();
    // sub.subscribe((res:any)=>{res.subscribe((a:any)=>{console.log(a);return a})})
   
    this.http.get<any>(url).subscribe(res=>sub.next(res))
 
return sub;

  }
  
}
