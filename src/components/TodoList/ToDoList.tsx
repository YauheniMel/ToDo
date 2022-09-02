import { FC } from 'react';
import { ToDoType } from '../../types';
import ToDoItem from '../ToDoItem/ToDoItem';
import classes from './ToDoList.module.css';

interface IToDoList {
  todos: ToDoType[];
}

const ToDoList: FC<IToDoList> = ({ todos }) => {
  function createToDoList(todos: ToDoType[]) {
    return todos.map((todo) => (
      <li key={todo.id}>
        <ToDoItem todo={todo} />
      </li>
    ));
  }

  return (
    <div className='container'>
      <ul className={classes.list}>{createToDoList(todos)}</ul>
    </div>
  );
};

export default ToDoList;
