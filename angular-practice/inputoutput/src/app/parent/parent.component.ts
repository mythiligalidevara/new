import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent {

choco:any=0

chococount(){
  this.choco++;
}

thankstext:any=""

saythanks($event:any){
this.thankstext=$event
}

}
