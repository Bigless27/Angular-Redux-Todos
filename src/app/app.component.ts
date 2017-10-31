import { GET_TODOS } from './../redux/actions/todo-actions';
import { ITodo, ITodoState } from './../redux/reducers/todoReducer';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgRedux, select } from '@angular-redux/store';
import { Observable } from 'rxjs/Rx';
import { IInitial_State, INITIAL_STATE } from './../redux/initState';
import * as t from '../redux/actions/todo-actions';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public todoForm: FormGroup;
   public todo_state: Observable<ITodo[]>


  constructor(private fb: FormBuilder,
                      private ngRedux: NgRedux<IInitial_State>) {
    this.initTodoForm();
  }


  ngOnInit() {
    this.ngRedux.dispatch({type: t.GET_TODOS})
    this.todo_state = this.ngRedux.select(x => x.todos.todos)
  }

  initTodoForm(){
    return this.todoForm = this.fb.group({
      'name': [null, Validators.compose([Validators.required])],
      'description': [null, Validators.compose([Validators.required])],
      'complete': false,
      'created': [new Date()]
    })
  }

  completeTodo(todo: ITodo) {
    todo.complete = !todo.complete
    this.ngRedux.dispatch({type: t.COMPLETE_TODO, payload: todo})
  }

  deleteTodo(todo: ITodo) {
    this.ngRedux.dispatch({type: t.DELETE_TODO, payload: todo})
  }
  addTodo() {
    this.ngRedux.dispatch({type: t.CREATE_TODOS, payload: this.todoForm.value})
  }
}
