import { FC } from 'react';
import classes from './Checkbox.module.css';

interface ICheckbox {
  label: 'В избранное' | 'Выполнено';
  name: 'isFavourite' | 'isCompleted';
  checked: boolean;
}

const Checkbox: FC<ICheckbox> = ({ label, name, checked }) => (
  <div className={classes.wrap}>
    <label className={classes.label}>
      {label}
      <input name={name} checked={checked} className={classes.input} type='checkbox' />
      <span className={classes.span} />
    </label>
  </div>
);

export default Checkbox;
