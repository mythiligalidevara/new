import { Component } from '@angular/core';

@Component({
  selector: 'app-viewc',
  templateUrl: './viewc.component.html',
  styleUrls: ['./viewc.component.scss']
})
export class ViewcComponent {

public  counter:number=0;

inc(){
  this.counter++;
}
dec(){
  this.counter--;
}

}
