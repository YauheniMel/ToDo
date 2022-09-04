export interface ToDoType {
  id: string;
  content: string;
  isFavourite: boolean;
  isCompleted: boolean;
  createdAt: string;
}

export type NewToDoType = Pick<ToDoType, 'content' & 'isCompleted' & 'isFavourite'>;

export interface ToDoReducerType {
  todos: ToDoType[];
  idToDosInProcessUpdating: string[];
}

export enum Filter {
  all = 'all',
  completed = 'completed',
  uncompleted = 'uncompleted',
  favourite = 'favourite',
}

export interface Action<T> {
  readonly type: string;
  readonly payload?: T;
}

export type ValidateType = { message: string } | null;
