import { FC } from 'react';
import classes from './ListButton.module.css';

interface IListButton {
  children: string;
  changeTodo: (prop: 'isFavourite' | 'isCompleted') => void;
  propTodo: 'isFavourite' | 'isCompleted';
}

const ListButton: FC<IListButton> = ({ children, changeTodo, propTodo }) => (
  <button onClick={() => changeTodo(propTodo)} className={classes.wrap}>
    {children}
  </button>
);

export default ListButton;
