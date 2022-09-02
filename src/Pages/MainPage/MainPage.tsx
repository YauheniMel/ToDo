import { useEffect } from 'react';
import FilterBar from '../../components/FilterBar/FilterBar';
import Header from '../../components/Header/Header';
import ToDoList from '../../components/TodoList/ToDoList';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchToDosThunk } from '../../store/actions/asyncActions';
import { getToDos } from '../../store/selectors';
import { Filter } from '../../types';
import classes from './MainPage.module.css';

const MainPage = () => {
  const dispatch = useAppDispatch();

  const todos = useAppSelector(getToDos);

  useEffect(() => {
    dispatch(fetchToDosThunk(Filter.all));
  }, []);

  return (
    <>
      <Header dispatch={dispatch} />
      <FilterBar dispatch={dispatch} />
      <hr />
      <ToDoList todos={todos} />
    </>
  );
};

export default MainPage;
