import { Component } from '@angular/core';
import { ServService } from 'src/app/serv.service';
@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.scss'],
  providers:[ServService]
})
export class SampleComponent {

constructor(private serv:ServService){}

  getdata(){
this.serv.getdata().subscribe(
  {
  next:(res)=>console.log(res),
  error:(err)=>console.log(err.message),
  complete:()=>console.log("completed")
}
)
  }

  
}
