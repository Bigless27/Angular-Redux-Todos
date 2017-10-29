import { INITIAL_STATE, IInitial_State, combine } from './../redux/initState';
import { DevToolsExtension, NgRedux, NgReduxModule } from '@angular-redux/store';
import { HttpModule } from '@angular/http';
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

  constructor(
    private ngRedux: NgRedux<IInitial_State>,
    private devTools: DevToolsExtension,
    ) {
        let enhancers = process.env.isProd ? [devTools.enhancer()] : []
        //Add as forth argument to redux store as enhancer
        ngRedux.configureStore(combine, INITIAL_STATE, [], enhancers);
  }
}
