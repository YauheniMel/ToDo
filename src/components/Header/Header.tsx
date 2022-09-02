import { ChangeEvent, FC, SyntheticEvent, useState } from 'react';
import { AppDispatchType } from '../../store';
import { createToDoThunk } from '../../store/actions/asyncActions';
import { NewToDoType } from '../../types';
import classes from './Header.module.css';

interface IHeader {
  dispatch: AppDispatchType;
}

const Header: FC<IHeader> = ({ dispatch }) => {
  const [toDoContent, setToDoContent] = useState<string>('');

  function handleChangeSetToDo(e: ChangeEvent<HTMLInputElement>) {
    const inputValue = e.target.value;

    setToDoContent(inputValue);
  }

  function handleSubmitCreateToDo(e: SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();

    const todo: NewToDoType = {
      isFavourite: false,
      isCompleted: false,
      content: toDoContent,
    };

    dispatch(createToDoThunk(todo));

    setToDoContent('');
  }

  return (
    <header className={classes.header}>
      <form action='' onSubmit={handleSubmitCreateToDo}>
        <input type='text' onChange={handleChangeSetToDo} />
        <button type='submit'>Add</button>
      </form>
      <button className={classes.button}>
        <span className={classes.button_content} />
      </button>
    </header>
  );
};

export default Header;
