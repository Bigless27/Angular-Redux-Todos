import { HttpModule } from '@angular/http';
import { NgReduxModule } from '@angular-redux/store/lib/src/ng-redux.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [CommonModule, BrowserModule, NgReduxModule, HttpModule],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
