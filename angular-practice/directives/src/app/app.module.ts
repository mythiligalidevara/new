import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SampleComponent } from './sample/sample.component';
import { SampledirDirective } from './sampledir.directive';
import { CompComponent } from './comp/comp.component';
import { Comp1Component } from './comp1/comp1.component';

@NgModule({
  declarations: [
    AppComponent,
    SampleComponent,
    SampledirDirective,
    CompComponent,
    Comp1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
