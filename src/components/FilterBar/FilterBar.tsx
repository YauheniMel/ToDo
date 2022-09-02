import { FC } from 'react';
import fetchData from '../../API/fetchData';
import { AppDispatchType } from '../../store';
import { fetchToDosThunk } from '../../store/actions/asyncActions';
import { Filter } from '../../types';
import FilterElement from '../FilterElement/FilterElement';
import classes from './FilterBarBar.module.css';

interface IFilterBar {
  dispatch: AppDispatchType;
}

const FilterBar: FC<IFilterBar> = ({ dispatch }) => {
  function handleFilterToDos(filterType: Filter) {
    console.log(filterType);
    dispatch(fetchToDosThunk(filterType));
  }

  return (
    <div className='container'>
      <FilterElement
        handleFilter={handleFilterToDos}
        type={Filter.completed}
        title='Выполненные задачи'
      />
      <FilterElement
        handleFilter={handleFilterToDos}
        type={Filter.uncompleted}
        title='Задачи в работе'
      />
      <FilterElement
        handleFilter={handleFilterToDos}
        type={Filter.favourite}
        title='Избранные задачи'
      />
    </div>
  );
};

export default FilterBar;
