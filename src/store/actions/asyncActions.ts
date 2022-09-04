import { AppDispatchType } from '..';
import deleteToDo from '../../API/deleteToDo';
import fetchData from '../../API/fetchData';
import postToDo from '../../API/postToDo';
import updateToDo from '../../API/updateToDo';
import { Filter, NewToDoType, ToDoType } from '../../types';
import {
  addToDoAction,
  deleteToDoAction,
  setIdToDoInProcessUpdating,
  setIdToDoNotInProcessUpdating,
  setTodosAction,
  updateToDoAction,
} from './actions';

export const fetchToDosThunk = (filter: Filter) => (dispatch: AppDispatchType) => {
  fetchData(filter)
    .then((todos) => dispatch(setTodosAction(todos)))
    .catch((error) => alert(error));
};

export const createToDoThunk = (todo: NewToDoType) => (dispatch: AppDispatchType) => {
  postToDo(todo)
    .then((newToDo) => dispatch(addToDoAction(newToDo)))
    .catch((error) => alert(error));
};

export const updateToDoThunk = (todo: ToDoType) => (dispatch: AppDispatchType) => {
  dispatch(setIdToDoInProcessUpdating(todo.id));

  updateToDo(todo)
    .then((updatedTodo) => {
      dispatch(updateToDoAction(updatedTodo));
    })
    .catch((error) => alert(error))
    .finally(() => dispatch(setIdToDoNotInProcessUpdating(todo.id)));
};

export const deleteToDoThunk = (id: string) => (dispatch: AppDispatchType) => {
  dispatch(setIdToDoInProcessUpdating(id));

  deleteToDo(id)
    .then((deletedToDo) => dispatch(deleteToDoAction(deletedToDo.id)))
    .catch((error) => alert(error))
    .finally(() => dispatch(setIdToDoNotInProcessUpdating(id)));
};
