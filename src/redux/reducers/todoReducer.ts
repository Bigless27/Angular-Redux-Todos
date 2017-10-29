import { CREATE_TODOS_SUCCESS } from './../actions/todos-actions';
import { ITodoState } from './todoReducer';
import { tassign } from 'tassign';
import * as t from '../actions/todos-actions';

export interface ITodo {
    name: string,
    description: string,
    completed: boolean,

    createdAt: string
}
export interface ITodoState {
   todos: Array<ITodo>,
   fetching: false,
   creating: false,
   error:  null
}

export const  TODO_STATE: ITodoState = {
   todos: [],
   fetching: false,
   creating: false,
   error: null
}

function get_todos(state: ITodoState, action: any ) {
    return tassign(state, {
        todos: action.payload,
        fetching: true
    })
}


function get_todos_success(state: ITodoState, action: any) {
    return tassign(state, {
        todos: action.payload,
        fetching: false,
        error: null
    })
}


function create_todos(state: ITodoState, action: any) {
    return tassign(state, {
        todos: action.payload,
        creating: true
    })
}

function create_todos_success(state: ITodoState, action: any) {
    return tassign(state, {
        todos: action.payload,
        creating: false,
        error: null
    })
}

function todos_error(state: ITodoState, action: any) {
    return tassign(state, {
        error: action.payload
    })
}



export function todoReducer(state: ITodoState = TODO_STATE, action: any): ITodoState {
    switch(action.type) {
        case t.GET_TODOS: return get_todos(state, action);

        case t.GET_TODOS_SUCCESS: return get_todos_success(state, action);

        case t.CREATE_TODOS: return create_todos(state, action); 

        case t.CREATE_TODOS_SUCCESS: return create_todos_success(state, action);

        case t.TODOS_ERROR: return todos_error(state, action);

    }
    return state
}