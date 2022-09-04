import { useEffect, useState } from 'react';
import FilterBar from '../../components/FilterBar/FilterBar';
import Header from '../../components/Header/Header';
import ModalDelete from '../../components/ModalDelete/ModalDelete';
import ToDoList from '../../components/TodoList/ToDoList';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { deleteToDoThunk, fetchToDosThunk } from '../../store/actions/asyncActions';
import { getToDos } from '../../store/selectors';
import { Filter, ToDoType } from '../../types';

const MainPage = () => {
  const [delTodo, setDelTodo] = useState<ToDoType | null>(null);
  const [filter, setFilter] = useState<Filter>(Filter.all);

  const dispatch = useAppDispatch();

  const todos = useAppSelector(getToDos);

  useEffect(() => {
    dispatch(fetchToDosThunk(filter));
  }, [filter]);

  function handleDeleteToDo(id: string) {
    dispatch(deleteToDoThunk(id));

    setDelTodo(null);
  }

  return (
    <>
      <Header setFilter={setFilter} dispatch={dispatch} />
      <FilterBar filter={filter} setFilter={setFilter} />
      <ToDoList setDelTodo={setDelTodo} todos={todos} />
      {delTodo && (
        <ModalDelete deleteToDo={handleDeleteToDo} setDelTodo={setDelTodo} todo={delTodo} />
      )}
    </>
  );
};

export default MainPage;
