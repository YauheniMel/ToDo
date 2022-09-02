import { Filter, ToDoType } from '../types';
import buildURL from './buildURL';

export default async function fetchData(type: Filter): Promise<ToDoType[] | []> {
  const url = buildURL();

  const response = await fetch(url);

  const allTodos = (await response.json()) as ToDoType[] | [];

  let targetToDo;

  switch (type) {
    case 'all': {
      targetToDo = allTodos;

      break;
    }
    case 'completed': {
      targetToDo = allTodos.filter((todo) => todo.isCompleted);

      break;
    }
    case 'uncompleted': {
      targetToDo = allTodos.filter((todo) => !todo.isCompleted);

      break;
    }
    case 'favourite': {
      targetToDo = allTodos.filter((todo) => !todo.isFavourite);
    }
  }

  return targetToDo as ToDoType[] | [];
}
