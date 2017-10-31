import { combineReducers, Reducer } from 'redux';
import { ITodoState, TODO_STATE, todoReducer } from './reducers/todoReducer';

export interface IInitial_State {
    todos: ITodoState;
}


export const INITIAL_STATE:  IInitial_State = {
    todos: TODO_STATE
}

export const combine = combineReducers<IInitial_State>({
    todos: todoReducer
})

