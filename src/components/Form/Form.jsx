import { useState } from 'react';
import styles from './Form.module.css';

const Form = ({ onAdded }) => {
   const [formData, setFormData] = useState({
      date: '',
      length: '',
   });

   const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData({
         ...formData,
         [name]: value,
      });
   };

   const onSubmit = (e) => {
      e.preventDefault();
      onAdded(formData);
      setFormData({
         ...formData,
         value: '',
      });
   };

   return (
      <form className={styles['form-container']} onSubmit={onSubmit}>
         <div className={styles['date-input']}>
            <label htmlFor='date'>Дата (ДД.ММ.ГГГГ)</label>
            <input
               type='text'
               id='date'
               name='date'
               onChange={handleInputChange}
               className={styles['input']}
            />
         </div>
         <div className={styles['length-input']}>
            <label htmlFor='length'>Пройдено, км</label>
            <input
               type='text'
               id='length'
               name='length'
               onChange={handleInputChange}
               className={styles['input']}
            />
         </div>
         <button className={styles['btn']}>ok</button>
      </form>
   );
};

export default Form;
