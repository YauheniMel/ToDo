import { ToDoType } from '../types';
import buildURL from './buildURL';

export default async function updateToDo(todo: ToDoType): Promise<ToDoType> {
  const todoToJSON = JSON.stringify(todo);

  const url = buildURL(todo.id);

  const response = await fetch(url, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: todoToJSON,
  });

  return await response.json();
}
