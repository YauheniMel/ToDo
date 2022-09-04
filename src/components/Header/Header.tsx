import { ChangeEvent, FC, SyntheticEvent, useState } from 'react';
import useValidate from '../../hooks/useValidate';
import { AppDispatchType } from '../../store';
import { createToDoThunk } from '../../store/actions/asyncActions';
import { Filter, NewToDoType } from '../../types';
import classes from './Header.module.css';

interface IHeader {
  dispatch: AppDispatchType;
  setFilter: (filter: Filter) => void;
}

const Header: FC<IHeader> = ({ dispatch, setFilter }) => {
  const [toDoContent, setToDoContent] = useState('');
  const [showHeader, setShowHeader] = useState(false);

  const validate = useValidate(toDoContent);

  function handleChangeSetToDo(e: ChangeEvent<HTMLInputElement>) {
    const inputValue = e.target.value;

    setToDoContent(inputValue);
  }

  function handleSubmitCreateToDo(e: SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();

    if (validate) return;

    const todo: NewToDoType = {
      isFavourite: false,
      isCompleted: false,
      content: toDoContent.trim(),
    };

    setFilter(Filter.all);

    dispatch(createToDoThunk(todo));

    setToDoContent('');
  }

  return (
    <header className={classes.header}>
      <div className={`${classes.form} ${showHeader ? classes.d_block : classes.d_none}`}>
        {validate && <strong>{validate.message}</strong>}
        <form onSubmit={handleSubmitCreateToDo}>
          <input
            autoFocus
            type='text'
            value={toDoContent}
            placeholder='Изучить ReactJS'
            onChange={handleChangeSetToDo}
          />
          <button className={classes.btn_submit} type='submit' />
        </form>
      </div>
      <button
        onClick={() => setShowHeader(!showHeader)}
        className={`${classes.button} ${showHeader ? classes.hide : ''}`}
      >
        <span className={classes.button_content} />
      </button>
    </header>
  );
};

export default Header;
