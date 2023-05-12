import { Component } from '@angular/core';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss']
})
export class TemplateComponent {

  name:string="";
  pwd:string="";

handleSubmit(){
  console.log(this.name,this.pwd)
}

}
