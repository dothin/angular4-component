import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TemplateInterporationComponent } from './template-interporation/template-interporation.component';
import { TemplateRefVarComponent } from './template-ref-var/template-ref-var.component';
import { TemplateValueBindComponent } from './template-value-bind/template-value-bind.component';
import { TemplateEventBindingComponent } from './template-event-binding/template-event-binding.component';
import { TemplateTwoWayBindingComponent } from './template-two-way-binding/template-two-way-binding.component';
import { FontResizerComponent } from './template-two-way-binding/font-resizer/font-resizer.component';
import { TemplateNgIfComponent } from './template-ng-if/template-ng-if.component';
import { TemplateNgForComponent } from './template-ng-for/template-ng-for.component';
import { TemplateNgSwitchComponent } from './template-ng-switch/template-ng-switch.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateInterporationComponent,
    TemplateRefVarComponent,
    TemplateValueBindComponent,
    TemplateEventBindingComponent,
    TemplateTwoWayBindingComponent,
    FontResizerComponent,
    TemplateNgIfComponent,
    TemplateNgForComponent,
    TemplateNgSwitchComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
