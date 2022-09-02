import { NewToDoType, ToDoType } from '../types';
import buildURL from './buildURL';

export default async function postToDo(todo: NewToDoType): Promise<ToDoType> {
  const todoToJSON = JSON.stringify(todo);

  const url = buildURL();

  const response = await fetch(url, {
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
    method: 'POST',
    body: todoToJSON,
  });

  return await response.json();
}
