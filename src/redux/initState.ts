interface ITodo {
    name: string;
    description: string;

    complete: boolean;

    createdAt: Date;
}
interface IInitialState {
    todos: Array<ITodo>;
}


export const INITIAL_STATE:  IInitialState = {
    todos: []
}