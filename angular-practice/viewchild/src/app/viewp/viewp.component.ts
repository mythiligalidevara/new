import { Component } from '@angular/core';
import { ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';
import { ViewcComponent } from '../viewc/viewc.component';
import { AfterViewInit } from '@angular/core';
@Component({
  selector: 'app-viewp',
  templateUrl: './viewp.component.html',
  styleUrls: ['./viewp.component.scss']
})
export class ViewpComponent  {

    @ViewChild("vc")child!:ViewcComponent;
 



inc(){
   this.child.inc(); 
}
dec(){
  this.child.dec();
}

}
