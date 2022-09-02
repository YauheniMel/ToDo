import { AppStateType } from '..';

export const getToDos = (state: AppStateType) => state.main.todos;
