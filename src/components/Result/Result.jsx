import styles from './Result.module.css';

const Result = ({ results, onDelete }) => {
   return results.map((res) => {
      const { id, ...resProps } = res;
      return <ResultRow key={id} {...resProps} onDelete={() => onDelete(id)} />;
   });
};

function ResultRow({ date, length, onDelete }) {
   return (
      <div className={styles['result']}>
         <span className={styles['date']}>{date}</span>
         <span className={styles['length']}>{length}</span>
         <div className={styles['btn-group']}>
            <button className={styles['btn-edit']}></button>
            <button className={styles['btn-delete']} onClick={onDelete}></button>
         </div>
      </div>
   );
}

export default Result;
