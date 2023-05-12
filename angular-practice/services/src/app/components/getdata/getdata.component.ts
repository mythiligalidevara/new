import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ApiserviceService } from 'src/app/services/apiservice.service';
import {Observable} from "rxjs"

@Component({
  selector: 'app-getdata',
  templateUrl: './getdata.component.html',
  styleUrls: ['./getdata.component.scss'],
  providers:[ApiserviceService]
})
export class GetdataComponent implements OnInit{
data:any
displayedColumns:string[]=['userId','id','title','completed']
searchterm:any="";
order:string="asc";
sortby:string="title"

constructor(private srv:ApiserviceService){

}

ngOnInit(): void {
 this.getdata();
 this.obs()

}

getdata(){
this.srv.fetchdata().subscribe({
  next:(res)=>{
console.log(res);
this.data=res
console.log(this.data)

  },
  error:(err)=>{
console.log(err);

  },
  complete:()=>{
console.log("hello")
  }
})
}

obs(){
  let count=0
  const obv=new Observable(res=>{
    setInterval(()=>{
      res.next(count++)
    },1000)
  })
 let a= obv.subscribe(res=>console.log(res));
a.unsubscribe()

const promise=new Promise(resolve=>{
  setInterval(()=>{
    resolve("promise working")
  },1000)
})

promise.then(res=>console.log(res))

}


handleSearch(){
  console.log(this.searchterm)
  console.log("first");

  // document.addEventListener('keydown', function(event) {
  //   if (event.keyCode === 8) {
  //     event.preventDefault();
      
  //   }
  // });

  if(!this.searchterm){
    window.location.reload()
  }
 let filtered= this.data.filter((item:any)=>{
    return item.title.toLowerCase().includes(this.searchterm.toLowerCase())
  })

  this.data= filtered
}



handleSort(){


if(this.order=="asc"){
console.log("asc")
 let result= [...this.data].sort((a:any,b:any)=>{
return a[this.sortby].toLowerCase()>b[this.sortby].toLowerCase()?1:-1
  })

  this.data=result;
  this.order="dsc";

}

else if(this.order=="dsc"){
  console.log("dsc")
let result=[...this.data].sort((a:any,b:any)=>{
  return a["title"].toLowerCase()<b["title"].toLowerCase()?1:-1
})
this.data=result;
this.order="asc"

}


}

}

