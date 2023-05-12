import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { OnInit } from '@angular/core';
import { ApiserviceService } from 'src/app/services/apiservice.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss'],
  providers:[ApiserviceService]
})
export class SubjectComponent implements OnInit {

  url:any="https://jsonplaceholder.typicode.com/todos";
 result:any;

  constructor(private srv:ApiserviceService){

  }

ngOnInit(): void {

//   const sub=new Subject();
//   sub.subscribe(res=>console.log(res))
// sub.next("hi")

this.retrievedata()


}

retrievedata(){
  
  this.srv.fetchdata1(this.url).subscribe((data:any)=>console.log(data))
// this.result= this.srv.fetchdata1(this.url)
// this.result.subscribe((data:any)=>console.log(data))
//  console.log(this.result)
}

}
