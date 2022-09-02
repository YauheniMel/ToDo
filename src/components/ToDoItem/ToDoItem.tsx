import { ChangeEvent, FC, SyntheticEvent, useState } from 'react';
import { useAppDispatch } from '../../hooks';
import { updateToDoThunk } from '../../store/actions/asyncActions';
import { ToDoType } from '../../types';
import Menu from '../Menu/Menu';
import classes from './ToDoItem.module.css';

interface IToDoItem {
  todo: ToDoType;
}

const ToDoItem: FC<IToDoItem> = ({ todo }) => {
  const [contentIsEditing, setContentIsEditing] = useState<boolean>(false);
  const [newToDoContent, setNewToDoContent] = useState<string>(todo.content);

  const dispatch = useAppDispatch();

  function handleChangeInputToDoContent(e: ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;

    setNewToDoContent(value);
  }

  function handleSubmitUpdateToDoContent(e: SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();

    const updatedToDo = {
      ...todo,
      content: newToDoContent,
    };

    dispatch(updateToDoThunk(updatedToDo));

    setContentIsEditing(false);
  }

  return (
    <div className={classes.wrap}>
      {contentIsEditing ? (
        <form action='' onSubmit={handleSubmitUpdateToDoContent}>
          <input
            autoFocus
            type='text'
            onChange={handleChangeInputToDoContent}
            value={newToDoContent}
          />
          <button type='submit' style={{ display: 'none' }} />
        </form>
      ) : (
        <p>{todo.content}</p>
      )}
      <Menu dispatch={dispatch} todo={todo} setContentIsEditing={setContentIsEditing} />
    </div>
  );
};

export default ToDoItem;
