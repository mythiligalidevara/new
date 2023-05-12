import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompComponent } from './comp/comp.component';
import { Comp1Component } from './comp1/comp1.component';
import { AuthGuard } from './services/auth.guard';
const routes: Routes = [
  {
    path:"/comp",
    component:CompComponent
  },
  {
    path:"/comp1",
    component:Comp1Component,
    canActivate:[AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
