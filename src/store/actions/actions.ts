import { Action, ToDoType } from '../../types';
import {
  ADD_TODO,
  DELETE_TODO,
  SET_ID_TODO_IN_PROCESS_UPDATING,
  SET_ID_TODO_NOT_IN_PROCESS_UPDATING,
  SET_IS_COMPLETED_TODO,
  SET_IS_FAVOURITE_TODO,
  SET_IS_NOT_COMPLETED_TODO,
  SET_IS_NOT_FAVOURITE_TODO,
  SET_TODOS,
  UPDATE_TODO,
} from './constants';

export const setIdToDoInProcessUpdating = (payload: string) => ({
  type: SET_ID_TODO_IN_PROCESS_UPDATING,
  payload,
});

export const setIdToDoNotInProcessUpdating = (payload: string) => ({
  type: SET_ID_TODO_NOT_IN_PROCESS_UPDATING,
  payload,
});

export const setTodosAction = (payload: ToDoType[]): Action<ToDoType[]> => ({
  type: SET_TODOS,
  payload,
});

export const setIsFavouriteToDoAction = (payload: string): Action<string> => ({
  type: SET_IS_FAVOURITE_TODO,
  payload,
});

export const setIsNotFavouriteToDoAction = (payload: string): Action<string> => ({
  type: SET_IS_NOT_FAVOURITE_TODO,
  payload,
});

export const setIsCompletedToDoAction = (payload: string): Action<string> => ({
  type: SET_IS_COMPLETED_TODO,
  payload,
});

export const setIsNotCompletedToDoAction = (payload: string): Action<string> => ({
  type: SET_IS_NOT_COMPLETED_TODO,
  payload,
});

export const addToDoAction = (payload: ToDoType): Action<ToDoType> => ({
  type: ADD_TODO,
  payload,
});

export const updateToDoAction = (payload: ToDoType): Action<ToDoType> => ({
  type: UPDATE_TODO,
  payload,
});

export const deleteToDoAction = (payload: string): Action<string> => ({
  type: DELETE_TODO,
  payload,
});
