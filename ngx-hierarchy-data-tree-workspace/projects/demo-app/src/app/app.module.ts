import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NgxHierarchyDataTreeModule} from "ngx-hierarchy-data-tree";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxHierarchyDataTreeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
