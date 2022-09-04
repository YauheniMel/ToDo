import { FC } from 'react';
import { ToDoType } from '../../types';
import ToDoItem from '../ToDoItem/ToDoItem';
import classes from './ModalDelete.module.css';

interface IModalDelete {
  setDelTodo: (todo: ToDoType | null) => void;
  todo: ToDoType;
  deleteToDo: (id: string) => void;
}

const ModalDelete: FC<IModalDelete> = ({ todo, setDelTodo, deleteToDo }) => {
  function getValidDateValue(value: number) {
    if (value > 9) return value;

    return `0${value}`;
  }

  function getParsedDate(dateStr: string): string {
    const day = getValidDateValue(new Date(dateStr).getDate());
    const month = getValidDateValue(new Date(dateStr).getMonth() + 1);
    const year = new Date(dateStr).getFullYear();

    return `${day}.${month}.${year}г.`;
  }

  function handleClickCloseModal() {
    setDelTodo(null);
  }

  return (
    <div className={classes.backdrop}>
      <div className={classes.wrap}>
        <button onClick={handleClickCloseModal} className={classes.btn_close}>
          &times;
        </button>
        <h4 className={classes.head}>Вы действительно хотите удалить задачу?</h4>
        <div className={classes.body}>
          <ToDoItem viewOnly todo={todo} />
          <span>Дата создания: </span>
          <time>{getParsedDate(todo.createdAt)}</time>
        </div>
        <div className={classes.action}>
          <button onClick={handleClickCloseModal}>Отмена</button>
          <button onClick={() => deleteToDo(todo.id)}>Да, удалить</button>
        </div>
      </div>
    </div>
  );
};
export default ModalDelete;
