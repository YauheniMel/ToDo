import { FC } from 'react';
import classes from './ModalDelete.module.css';

interface IModalDelete {
  props?: any;
}

const ModalDelete:FC<IModalDelete> = () => (
  <div className={classes.backdrop}>
    <div className={classes.wrap}>
      <h4>Вы действительно хотите удалить задачу?</h4>
      {/* в body запрещаем события и внутри minitodoitem */}
    </div>
  </div>
)
export default ModalDelete;
