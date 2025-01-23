import styles from './Result.module.css';

const Result = ({ date, length }) => {
   return (
      <div className={styles['result']}>
         <span className={styles['date']}>{date}</span>
         <span className={styles['length']}>{length}</span>
         <div className={styles['btn-group']}>
            <button className={styles['btn-edit']}></button>
            <button className={styles['btn-delete']}></button>
         </div>
      </div>
   );
};

export default Result;
