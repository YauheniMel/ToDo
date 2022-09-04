import { FC } from 'react';
import { Filter } from '../../types';
import FilterElement from '../FilterElement/FilterElement';
import classes from './FilterBar.module.css';

interface IFilterBar {
  setFilter: (filter: Filter) => void;
  filter: Filter;
}

const FilterBar: FC<IFilterBar> = ({ setFilter, filter }) => {
  return (
    <div className={`container ${filter === Filter.all || classes.active} ${classes.wrap}`}>
      <div>
        <FilterElement
          filter={filter}
          setFilter={setFilter}
          type={Filter.completed}
          title='Выполненные задачи'
        />
        <FilterElement
          filter={filter}
          setFilter={setFilter}
          type={Filter.uncompleted}
          title='Задачи в работе'
        />
        <FilterElement
          filter={filter}
          setFilter={setFilter}
          type={Filter.favourite}
          title='Избранные задачи'
        />
      </div>
      {filter === Filter.all || (
        <FilterElement filter={filter} setFilter={setFilter} type={Filter.all} title='Сбросить' />
      )}
    </div>
  );
};

export default FilterBar;
