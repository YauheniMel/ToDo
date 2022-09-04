import { Filter, ToDoType } from '../types';
import buildURL from './buildURL';

export default async function fetchData(filter: Filter): Promise<ToDoType[] | []> {
  const url = buildURL(null, filter);

  const response = await fetch(url);

  const toDos = await response.json();

  return toDos as ToDoType[] | [];
}
