import { ITodo } from './../redux/reducers/todoReducer';
import { Observable } from 'rxjs/Rx';
import { IInitial_State, INITIAL_STATE } from './../redux/initState';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import * as t from '../redux/actions/todos-actions';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public todoForm: FormGroup;

  public todo_state: Observable<any>;
  constructor(
      private fb: FormBuilder,
      private ngRedux: NgRedux<IInitial_State>
   ) {
    this.initTodosForm();
  }

  initTodosForm() {
    return this.todoForm = this.fb.group({
      'name': [null, Validators.compose([Validators.required])],
      'description': [null, Validators.compose([Validators.required])],
      'complete': false,
      'created': [new Date()]
    })
  }

  ngOnInit() {
    // this.ngRedux.select(x => console.log(x.todos.todos))
    this.ngRedux.dispatch({type: t.GET_TODOS})
    this.todo_state = this.ngRedux.select(x => x.todos.todos);
  }

  completeTodo(todo: ITodo) {
    todo.complete = !todo.complete;
    this.ngRedux.dispatch({type: t.COMPLETE_TODO, payload: todo})
  }

  deleteTodo(todo: ITodo) {
    this.ngRedux.dispatch({type: t.DELETE_TODO, payload: todo})
  }

  addTodo(todo: any) {
    this.ngRedux.dispatch({type: t.CREATE_TODOS, payload: this.todoForm.value })
  }
}
