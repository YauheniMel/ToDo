import { FC, useEffect, useRef } from 'react';
import { AppDispatchType } from '../../store';
import { updateToDoThunk } from '../../store/actions/asyncActions';
import { ToDoType } from '../../types';
import ListButton from '../ListButton/ListButton';
import classes from './Menu.module.css';

interface IMenu {
  todo: ToDoType;
  setContentIsEditing: (contentIsEditing: boolean) => void;
  dispatch: AppDispatchType;
  setShowMenu: (show: boolean) => void;
  setDelTodo?: (todo: ToDoType) => void;
  showMenu: boolean;
}

const Menu: FC<IMenu> = ({
  setDelTodo,
  todo,
  setContentIsEditing,
  dispatch,
  setShowMenu,
  showMenu,
}) => {
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleMouseDownCloseMenu(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setShowMenu(false);
      }
    }

    document.addEventListener('mousedown', handleMouseDownCloseMenu);

    return () => document.removeEventListener('mousedown', handleMouseDownCloseMenu);
  }, []);

  function handleChangeToDo(prop: 'isFavourite' | 'isCompleted') {
    const updatedToDo = {
      ...todo,
      [prop]: !todo[prop],
    };

    dispatch(updateToDoThunk(updatedToDo));

    setShowMenu(false);
  }

  return (
    <div className={`${classes.wrap} ${!showMenu ? classes.hide : classes.show}`} ref={menuRef}>
      <ListButton changeTodo={handleChangeToDo} propTodo='isCompleted'>
        {todo.isCompleted ? 'Вернуть в работу' : 'Выполнено'}
      </ListButton>
      <ListButton propTodo='isFavourite' changeTodo={handleChangeToDo}>
        {todo.isFavourite ? 'Убрать из избранного' : 'В избранное'}
      </ListButton>
      <button
        className={classes.button}
        onClick={() => {
          setShowMenu(false);

          setContentIsEditing(true);
        }}
      >
        Редактировать
      </button>
      <button
        className={classes.button}
        onClick={() => {
          setShowMenu(false);

          setDelTodo!(todo);
        }}
      >
        Удалить
      </button>
    </div>
  );
};
export default Menu;
