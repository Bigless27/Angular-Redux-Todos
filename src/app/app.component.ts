import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public todoForm: FormGroup;
  constructor(private fb: FormBuilder) {
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

  ngOnInit() {}

  addTodo(todo: any) {
    console.log(this.todoForm.value);
  }
}
