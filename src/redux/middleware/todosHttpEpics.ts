import { COMPLETE_TODO } from './../actions/todos-actions';
import { ITodoState } from '../reducers/todoReducer';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import * as t from '../actions/todos-actions';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/catch';

@Injectable()
export class TodosHttpEpicsService {
    constructor(private http: Http) {}

    getTodos = (action$: Observable<any>) => {
        return action$.filter(({ type }) => type === t.GET_TODOS)
            .flatMap(() => this.http.get(process.env.API_URL + 'todos')
            .map(result => ({
                type: t.GET_TODOS_SUCCESS,
                payload: result.json()
            }))
            .catch(error => Observable.of( {type: t.TODOS_ERROR}))
        )
    }

    createTodo = (action$: Observable<any>) => {
        return action$.filter(({ type }) => type === t.CREATE_TODOS)
            .flatMap((data) => this.http.post(process.env.API_URL + 'todos', data.payload)
            .map(result => ({
                type: t.CREATE_TODOS_SUCCESS,
                payload: result.json()
            }))
            .catch(error => Observable.of( {type: t.TODOS_ERROR}))
        )
    }

    completeTodo = (action$: Observable<any>) => {
        return action$.filter(({ type }) => type === t.COMPLETE_TODO)
            .flatMap((data) => this.http.put(process.env.API_URL + 'todos/' + data.payload.id, data.payload)
            .map(result => ({
                type: t.COMPLETE_TODO_SUCCESS,
                payload: result.json()
            }))
            .catch(error => Observable.of( {type: t.TODOS_ERROR}))
        )
    }


}