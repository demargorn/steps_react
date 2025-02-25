import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Form.module.css';

Form.propTypes = {
   onAdded: PropTypes.func.isRequired,
};

function Form({ onAdded }) {
   const [formData, setFormData] = useState({
      date: new Date().toLocaleDateString().slice(0, 10),
      length: 0,
   });

   const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData({
         ...formData,
         [name]: value,
      });
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      onAdded(formData);
      setFormData({
         ...formData,
         date: new Date().toLocaleDateString().slice(0, 10),
         length: 0,
      });
   };

   return (
      <form className={styles['form-container']} onSubmit={handleSubmit}>
         <div className={styles['date-input']}>
            <label htmlFor='date'>Дата (ДД.ММ.ГГГГ)</label>
            <input
               type='text'
               id='date'
               name='date'
               pattern='^\d{2}\.\d{2}\.\d{4}$'
               title='введите дату в формате дд.мм.гггг'
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
               pattern='^\d{0,3}\.?\d{1,2}$'
               title='введите пройденное расстояние, например 2, 10 или 0.52'
               value={formData.length}
               onChange={handleInputChange}
               className={styles['input']}
            />
         </div>
         <button title='нажмите, чтобы сохранить' className={styles['btn']}>
            ok
         </button>
      </form>
   );
}

export default Form;
