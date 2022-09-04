import { ChangeEvent, FC, FocusEvent, KeyboardEvent, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import useValidate from '../../hooks/useValidate';
import { updateToDoThunk } from '../../store/actions/asyncActions';
import { getIdToDosInProcessUpdating } from '../../store/selectors';
import { ToDoType } from '../../types';
import Menu from '../Menu/Menu';
import classes from './ToDoItem.module.css';

interface IToDoItem {
  todo: ToDoType;
  viewOnly?: boolean;
  setDelTodo?: (todo: ToDoType) => void;
}

const ToDoItem: FC<IToDoItem> = ({ todo, viewOnly, setDelTodo }) => {
  const [contentIsEditing, setContentIsEditing] = useState(false);
  const [newToDoContent, setNewToDoContent] = useState(todo.content);
  const [showMenu, setShowMenu] = useState(false);

  const validate = useValidate(newToDoContent);

  const dispatch = useAppDispatch();
  const idToDosInProcessUpdating = useAppSelector(getIdToDosInProcessUpdating);

  function handleChangeInputToDoContent(e: ChangeEvent<HTMLTextAreaElement>) {
    const value = e.target.value;

    setNewToDoContent(value);
  }

  function handleUpdateToDoContent() {
    if (validate) return;

    const updatedToDo = {
      ...todo,
      content: newToDoContent.trim(),
    };

    dispatch(updateToDoThunk(updatedToDo));

    setContentIsEditing(false);
  }

  function handleSetIsNotFavourite() {
    const updatedToDo = {
      ...todo,
      isFavourite: false,
    };

    dispatch(updateToDoThunk(updatedToDo));
  }

  function handleBlurChangeToDoContent() {
    setContentIsEditing(false);

    setNewToDoContent(todo.content);
  }

  function handleKeyDownChangeToDoContent(e: KeyboardEvent<HTMLTextAreaElement>) {
    if (e.code === 'Enter') {
      handleUpdateToDoContent();
    }
  }

  function handleCaretAtEndTextarea(e: FocusEvent<HTMLTextAreaElement>) {
    const { value } = e.target;

    e.target.value = '';
    e.target.value = value.trim();
  }

  console.log(idToDosInProcessUpdating);

  return (
    <div
      className={classes.wrap}
      style={{
        pointerEvents: viewOnly ? 'none' : 'all',
        opacity: todo.isCompleted ? 0.4 : 1,
        transform: `scale(${todo.isCompleted ? 0.95 : 1})`,
        transitionDuration: '.3s',
      }}
    >
      {todo.isFavourite && (
        <span onClick={handleSetIsNotFavourite} className={classes.favourite_icon} />
      )}
      <button
        className={`${classes.btn_toggle} ${showMenu ? classes.hide : classes.show}`}
        onClick={() => setShowMenu(!showMenu)}
      />
      <Menu
        showMenu={showMenu}
        setShowMenu={setShowMenu}
        dispatch={dispatch}
        todo={todo}
        setContentIsEditing={setContentIsEditing}
        setDelTodo={setDelTodo}
      />
      {contentIsEditing ? (
        <>
          <textarea
            autoFocus
            className={classes.textarea}
            onChange={handleChangeInputToDoContent}
            value={newToDoContent}
            onFocus={handleCaretAtEndTextarea}
            onBlur={handleBlurChangeToDoContent}
            onKeyDown={handleKeyDownChangeToDoContent}
          />
          {validate && <strong>{validate.message}</strong>}
        </>
      ) : (
        <p>{todo.content}</p>
      )}
      {idToDosInProcessUpdating.includes(todo.id) && <span className={classes.preLoader}>...</span>}
    </div>
  );
};

export default ToDoItem;
