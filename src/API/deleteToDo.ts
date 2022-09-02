import { ToDoType } from '../types';
import buildURL from './buildURL';

export default async function deleteToDo(id: string): Promise<ToDoType> {
  const url = buildURL(id);

  const response = await fetch(url, {
    method: 'DELETE',
  });

  return await response.json();
}
