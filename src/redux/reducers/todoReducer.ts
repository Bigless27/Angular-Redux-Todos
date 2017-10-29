import { tassign } from 'tassign';

interface ITodo {
    name: string,
    description: string,
    completed: boolean,

    createdAt: string
}
export interface ITodoState {
   todos: Array<ITodo>,


}

export const  TODO_STATE: ITodoState = {
   todos: []
}


export function todoReducer(state: ITodoState = TODO_STATE, action: any): ITodoState {
    switch(action.type) {
        
    }
    return state
}