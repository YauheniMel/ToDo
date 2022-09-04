import { Filter } from '../types';

export default function buildURL(id: null | string = null, filter?: Filter): string {
  const BASE_URL = 'https://63125b40f5cba498da919f88.mockapi.io/todos';

  if (id) {
    return BASE_URL + '/' + id;
  }

  switch (filter) {
    case Filter.completed: {
      return BASE_URL + '?isCompleted=true';
    }
    case Filter.uncompleted: {
      return BASE_URL + '?isCompleted=false';
    }
    case Filter.favourite: {
      return BASE_URL + '?isFavourite=true';
    }
  }

  return BASE_URL;
}
