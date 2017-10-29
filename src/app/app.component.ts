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
      'createdAt': [new Date()]
    })
  }

  ngOnInit() {
    this.ngRedux.select(x => x.todos).subscribe(data => {
      console.log(data)
    })
  }

  addTodo(todo: any) {
    this.ngRedux.dispatch({type: t.CREATE_TODOS, payload: this.todoForm.value })
  }
}
