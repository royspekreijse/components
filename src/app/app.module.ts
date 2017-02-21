import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RspShrinkonscrollComponent } from './rsp-shrinkonscroll/rsp-shrinkonscroll.component';

@NgModule({
  declarations: [
    AppComponent,
    RspShrinkonscrollComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
