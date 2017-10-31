import { main } from '@angular/compiler-cli/src/main';
import { TodosHttpEpicsService } from './../redux/middleware/todosHttpEpics';
import { createEpicMiddleware } from 'redux-observable';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { DevToolsExtension, NgRedux, NgReduxModule } from '@angular-redux/store';
import { INITIAL_STATE, IInitial_State, combine } from './../redux/initState';

@NgModule({
  declarations: [AppComponent],
  imports: [
                    CommonModule, 
                    BrowserModule, 
                    HttpModule,
                    ReactiveFormsModule,
                    NgReduxModule
                  ],
  exports: [],
  providers: [
    TodosHttpEpicsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(
      private ngRedux: NgRedux<IInitial_State>,
      private devTools: DevToolsExtension,
      private todoEpics: TodosHttpEpicsService

  ) {
    let enhancers = process.env.isProd ? [] : [devTools.enhancer()];

    ngRedux.configureStore(combine, INITIAL_STATE, 
      [
        createEpicMiddleware(this.todoEpics.createTodo),
        createEpicMiddleware(this.todoEpics.getTodos),
        createEpicMiddleware(this.todoEpics.completeTodo),
        createEpicMiddleware(this.todoEpics.deleteTodo)
      ], enhancers)
  }
}
