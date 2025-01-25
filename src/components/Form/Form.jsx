import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Form.module.css';

Form.propTypes = {
   onAdded: PropTypes.func.isRequired,
};

function Form({ onAdded }) {
   const [formData, setFormData] = useState({
      date: new Date().toLocaleString('ru-RU').slice(0, 10),
      length: '0',
   });

   const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData({
         ...formData,
         [name]: value.trimEnd(),
      });
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      onAdded(formData);
      setFormData({
         ...formData,
         date: '',
         length: '',
      });
   };

   // console.log(new Date().toLocaleString('ru-RU').slice(0, 10));

   return (
      <form className={styles['form-container']} onSubmit={handleSubmit}>
         <div className={styles['date-input']}>
            <label htmlFor='date'>Дата (ДД.ММ.ГГГГ)</label>
            <input
               type='text'
               id='date'
               name='date'
               value={formData.date}
               onChange={handleInputChange}
               className={styles['input']}
               required
            />
         </div>
         <div className={styles['length-input']}>
            <label htmlFor='length'>Пройдено, км</label>
            <input
               type='text'
               id='length'
               name='length'
               value={formData.length}
               onChange={handleInputChange}
               className={styles['input']}
            />
         </div>
         <button className={styles['btn']}>ok</button>
      </form>
   );
}

export default Form;
