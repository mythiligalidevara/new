import { Directive, HostBinding, HostListener,Input } from '@angular/core';
import { ElementRef } from '@angular/core';
@Directive({
  selector: '[appSampledir]'
})
export class SampledirDirective {
  @Input() color = 'yellow';

  @HostBinding('style.backgroundColor')
  get backgroundColor() {
    return this.color;
  }
  
  constructor(private el:ElementRef) { 
    this.el.nativeElement.style.color="Red"
  }
@HostListener("click")function(){
  alert("hello")
}
}


