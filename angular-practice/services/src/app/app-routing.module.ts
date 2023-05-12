import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetdataComponent } from './components/getdata/getdata.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SubjectComponent } from './components/subject/subject.component';

const routes: Routes = [
  {
    path:"",
    component:NavbarComponent
  },
  {
    path:"getdata",
    component:GetdataComponent
  },
  {
    path:"subject",
    component:SubjectComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
