import { AppStateType } from '..';

export const getToDos = (state: AppStateType) => state.main.todos;

export const getIdToDosInProcessUpdating = (state: AppStateType) =>
  state.main.idToDosInProcessUpdating;
