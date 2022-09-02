import { ToDoType } from '../../types';
import {
  ADD_TODO,
  DELETE_TODO,
  SET_IS_COMPLETED_TODO,
  SET_IS_FAVOURITE_TODO,
  SET_IS_LOADING,
  SET_IS_NOT_COMPLETED_TODO,
  SET_IS_NOT_FAVOURITE_TODO,
  SET_TODOS,
  UPDATE_TODO,
} from './constants';

export const setIsLoading = (payload: boolean) => ({
  type: SET_IS_LOADING,
  payload,
});

export const setTodosAction = (payload: ToDoType[] | []) => ({
  type: SET_TODOS,
  payload,
});

export const setIsFavouriteToDoAction = (payload: string) => ({
  type: SET_IS_FAVOURITE_TODO,
  payload,
});

export const setIsNotFavouriteToDoAction = (payload: string) => ({
  type: SET_IS_NOT_FAVOURITE_TODO,
  payload,
});

export const setIsCompletedToDoAction = (payload: string) => ({
  type: SET_IS_COMPLETED_TODO,
  payload,
});

export const setIsNotCompletedToDoAction = (payload: string) => ({
  type: SET_IS_NOT_COMPLETED_TODO,
  payload,
});

export const addToDoAction = (payload: ToDoType) => ({
  type: ADD_TODO,
  payload,
});

export const updateToDoAction = (payload: ToDoType) => ({
  type: UPDATE_TODO,
  payload,
});

export const deleteToDoAction = (payload: string) => ({
  type: DELETE_TODO,
  payload,
});
