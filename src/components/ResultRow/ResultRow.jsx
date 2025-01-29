import PropTypes from 'prop-types';
import styles from './ResultRow.module.css';

ResultRow.propTypes = {
   date: PropTypes.string.isRequired,
   length: PropTypes.string.isRequired,
   onEdit: PropTypes.func.isRequired,
   onDelete: PropTypes.func.isRequired,
};

function ResultRow({ date, length, onDelete }) {
   return (
      <div className={styles['result']}>
         <span className={styles['date']}>{date}</span>
         <span className={styles['length']}>{length}</span>
         <div className={styles['btn-group']}>
            <button title='удалить' className={styles['btn-delete']} onClick={onDelete}></button>
         </div>
      </div>
   );
}

export default ResultRow;
