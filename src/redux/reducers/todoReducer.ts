import { tassign } from 'tassign/lib';
import { ITodoState } from './todoReducer';
import * as t from '../actions/todo-actions';
export interface ITodo {
    name: string,
    description: string,
    complete: boolean,

    created: Date
}
export interface ITodoState {
   todos: Array<ITodo>,
   loading: false,
   error:  null
}

export const  TODO_STATE: ITodoState = {
    todos: [],
    loading: false,
    error: null
 }

 function get_todos(state: ITodoState, action: any ) {
    return tassign(state, {
        loading: true
    })
}


function get_todos_success(state: ITodoState, action: any) {
    return tassign(state, {
        todos: action.payload,
        loading: false,
        error: null
    })
}

 function create_todos(state: ITodoState, action: any) {
    return tassign(state, {
        error: null,
        loading: true
    })
 }

 function create_todos_success(state: ITodoState, action: any) {
    return tassign(state, {
        todos: state.todos.concat(action.payload),
        loading: false,
        error: null
    })
}

function complete_todo(state: ITodoState, action: any) {
    return tassign(state, {
        loading: true
    })
}

function complete_todo_success(state: ITodoState, action: any) {
    return tassign(state, {
        loading: false
    })
}

function delete_todo(state: ITodoState, action: any) {
    return tassign(state, {
        loading: true
    })
}

function delete_todo_success(state: ITodoState, action: any) {
    return tassign(state, {
        loading: false
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

        case t.COMPLETE_TODO: return complete_todo(state, action);
        
       case t.COMPLETE_TODO_SUCCESS: return complete_todo_success(state, action);

       case t.DELETE_TODO: return delete_todo(state, action);
       
        case t.DELETE_TODO_SUCCESS: return delete_todo_success(state, action)

        case t.TODOS_ERROR: return todos_error(state, action);
    }

    return state
 }