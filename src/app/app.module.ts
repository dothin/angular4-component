import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule  } from '@angular/forms';

import { AppComponent } from './app.component';
import { LifeCycleComponent } from './life-cycle/life-cycle.component';
import { TestNgOnchangesComponent } from './test-ng-onchanges/test-ng-onchanges.component';
import { Child111Component } from './test-ng-onchanges/child111/child111.component';
import { Child222Component } from './life-cycle/child222/child222.component';
import { NgContentComponent } from './ng-content/ng-content.component';
import { Child3333Component } from './ng-content/child3333/child3333.component';

@NgModule({
  declarations: [
    AppComponent,
    LifeCycleComponent,
    TestNgOnchangesComponent,
    Child111Component,
    Child222Component,
    NgContentComponent,
    Child3333Component
],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
