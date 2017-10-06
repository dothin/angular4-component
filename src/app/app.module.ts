import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ParentAndChildComponent } from './parent-and-child/parent-and-child.component';
import { ChildComponent } from './parent-and-child/child/child.component';
import { BrotherComponent } from './brother/brother.component';
import { Child1Component } from './brother/child1/child1.component';
import { Child2Component } from './brother/child2/child2.component';
import { EventBusService } from './brother/service/service.service';

@NgModule({
  declarations: [
    AppComponent,
    ParentAndChildComponent,
    ChildComponent,
    BrotherComponent,
    Child1Component,
    Child2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [EventBusService],
  bootstrap: [AppComponent]
})
export class AppModule { }
