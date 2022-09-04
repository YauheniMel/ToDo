import { FC } from 'react';
import { ToDoType } from '../../types';
import ToDoItem from '../ToDoItem/ToDoItem';
import classes from './ToDoList.module.css';

interface IToDoList {
  todos: ToDoType[];
  setDelTodo: (todo: ToDoType) => void;
}

const ToDoList: FC<IToDoList> = ({ todos, setDelTodo }) => {
  function createToDoList(todos: ToDoType[]) {
    return todos.map((todo) => (
      <li key={todo.id}>
        <ToDoItem setDelTodo={setDelTodo} todo={todo} />
      </li>
    ));
  }

  return (
    <div className={`${classes.wrap} container`}>
      <ul className={classes.list}>{createToDoList(todos)}</ul>
    </div>
  );
};

export default ToDoList;
