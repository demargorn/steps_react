import styles from './Form.module.css';

const Form = ({ onHandleSetDate, onHandleSetLength }) => {
   return (
      <form className={styles['form-container']}>
         <div className={styles['date-input']}>
            <label htmlFor='date'>Дата (ДД.ММ.ГГГГ)</label>
            <input
               type='text'
               id='date'
               name='date'
               onChange={(e) => onHandleSetDate(e.target.value)}
               className={styles['input']}
            />
         </div>
         <div className={styles['length-input']}>
            <label htmlFor='length'>Пройдено, км</label>
            <input
               type='text'
               id='length'
               name='length'
               onChange={(e) => onHandleSetLength(e.target.value)}
               className={styles['input']}
            />
         </div>
         <button className={styles['btn']}>ok</button>
      </form>
   );
};

export default Form;
