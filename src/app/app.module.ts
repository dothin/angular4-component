import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule  } from '@angular/forms';

import { AppComponent } from './app.component';
import { LifeCycleComponent } from './life-cycle/life-cycle.component';
import { TestNgOnchangesComponent } from './test-ng-onchanges/test-ng-onchanges.component';
import { Child111Component } from './test-ng-onchanges/child111/child111.component';

@NgModule({
  declarations: [
    AppComponent,
    LifeCycleComponent,
    TestNgOnchangesComponent,
    Child111Component
],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
