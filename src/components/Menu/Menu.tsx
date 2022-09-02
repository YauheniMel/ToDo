import { ChangeEvent, FC, useState } from 'react';
import { AppDispatchType } from '../../store';
import { deleteToDoThunk, updateToDoThunk } from '../../store/actions/asyncActions';
import { ToDoType } from '../../types';
import Checkbox from '../Checkbox/Checkbox';
import classes from './Menu.module.css';

interface IMenu {
  todo: ToDoType;
  setContentIsEditing: (contentIsEditing: boolean) => void;
  dispatch: AppDispatchType;
}

const Menu: FC<IMenu> = ({ todo, setContentIsEditing, dispatch }) => {
  const [showMenu, setShowMenu] = useState(false);

  function handleChangeForm(e: ChangeEvent<HTMLFormElement>) {
    const { name, checked } = e.target;

    const updatedToDo = {
      ...todo,
      [name]: checked,
    };

    dispatch(updateToDoThunk(updatedToDo));
  }

  function handleDeleteToDo() {
    dispatch(deleteToDoThunk(todo.id));
  }

  return (
    <div className={classes.wrap}>
      <button className={classes.button} onClick={() => setShowMenu(!showMenu)} />
      <form action='' onChange={handleChangeForm}>
        <Checkbox name='isFavourite' label='В избранное' checked={todo.isFavourite} />
        <Checkbox name='isCompleted' label='Выполнено' checked={todo.isCompleted} />
      </form>
      <button onClick={() => setContentIsEditing(true)}>Редактировать</button>
      <button onClick={handleDeleteToDo}>Удалить</button>
    </div>
  );
};
export default Menu;
