import { AppDispatchType } from '..';
import deleteToDo from '../../API/deleteToDo';
import fetchData from '../../API/fetchData';
import postToDo from '../../API/postToDo';
import updateToDo from '../../API/updateToDo';
import { Filter, NewToDoType, ToDoType } from '../../types';
import {
  addToDoAction,
  deleteToDoAction,
  setIsLoading,
  setTodosAction,
  updateToDoAction,
} from './actions';
import { ADD_TODO } from './constants';

export const fetchToDosThunk = (type: Filter) => (dispatch: AppDispatchType) => {
  setIsLoading(true);

  fetchData(type)
    .then((todos) => dispatch(setTodosAction(todos)))
    .catch((error) => alert(error))
    .finally(() => setIsLoading(false));
};

export const createToDoThunk = (todo: NewToDoType) => (dispatch: AppDispatchType) => {
  setIsLoading(true);

  postToDo(todo)
    .then((newToDo) => dispatch(addToDoAction(newToDo)))
    .catch((error) => alert(error))
    .finally(() => setIsLoading(false));
};

export const updateToDoThunk = (todo: ToDoType) => (dispatch: AppDispatchType) => {
  setIsLoading(true);

  updateToDo(todo)
    .then((updatedTodo) => {
      dispatch(updateToDoAction(updatedTodo));
    })
    .catch((error) => alert(error))
    .finally(() => setIsLoading(false));
};

export const deleteToDoThunk = (id: string) => (dispatch: AppDispatchType) => {
  setIsLoading(true);

  deleteToDo(id)
    .then((deletedToDo) => dispatch(deleteToDoAction(deletedToDo.id)))
    .catch((error) => alert(error))
    .finally(() => setIsLoading(false));
};
