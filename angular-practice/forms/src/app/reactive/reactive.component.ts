import { Component } from '@angular/core';
import { FormBuilder,FormControl,FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.scss']
})
export class ReactiveComponent {
constructor(private fb:FormBuilder){

}

signup=this.fb.group({
uname:["",Validators.compose([Validators.required,Validators.minLength(3),Validators.maxLength(5)])],
pwd:["",Validators.compose([Validators.required])]
})


handlesubmit(value:any){
console.log(value)
}
}
