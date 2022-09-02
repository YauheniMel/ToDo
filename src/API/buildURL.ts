export default function buildURL(id: null | string = null): string {
  const BASE_URL = 'https://63125b40f5cba498da919f88.mockapi.io/todos';

  if (id) {
    return BASE_URL + '/' + id;
  }

  return BASE_URL;
}
