import { FC } from 'react';
import { Filter } from '../../types';
import classes from './FilterElement.module.css';

interface IFilterElement {
  title: string;
  type: Filter;
  setFilter: (filterType: Filter) => void;
  filter: Filter;
}

const FilterElement: FC<IFilterElement> = ({ filter, title, type, setFilter }) => (
  <button onClick={() => setFilter(type)} className={classes.button}>
    {title}
    {type !== Filter.all && filter === type && <span className={classes.active} />}
  </button>
);

export default FilterElement;
