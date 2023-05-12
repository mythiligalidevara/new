import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {
@Input() chocolates:any;
@Output() thanks:EventEmitter<string>=new EventEmitter<string>();

saythanks($event:any){
  this.thanks.emit("thank you")
}
}
