export interface ToDoType {
  id: string;
  content: string;
  isFavourite: boolean;
  isCompleted: boolean;
}

export type NewToDoType = Pick<ToDoType, 'content' & 'isCompleted' & 'isFavourite'>;

export type ErrorType = null | { message: string };

export interface ToDoReducerType {
  todos: ToDoType[] | [];
  error: ErrorType;
  isLoading: boolean;
}

export enum Filter {
  all = 'all',
  completed = 'completed',
  uncompleted = 'uncompleted',
  favourite = 'favourite',
}
