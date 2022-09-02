import { FC } from 'react';
import { Filter } from '../../types';
import classes from './FilterElement.module.css';

interface IFilterElement {
  title: string;
  type: Filter;
  handleFilter: (filterType: Filter) => void;
}

const FilterElement: FC<IFilterElement> = ({ title, type, handleFilter }) => {
  return (
    <button onClick={() => handleFilter(type)} className={classes.button}>
      {title}
    </button>
  );
};

export default FilterElement;
