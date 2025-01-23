import { useState } from 'react';
import Form from './Form/Form';
import Title from './Title/Title';
import Result from './Result/Result';
import styles from './App.module.css';

const App = () => {
   const [date, setDate] = useState('');
   const [length, setLength] = useState('');
   // const dataArray = [];

   const handleSetDate = (value) => setDate(value);
   const handleSetLength = (value) => setLength(value);

   return (
      <>
         <div className={styles['form-container']}>
            <Form onHandleSetDate={handleSetDate} onHandleSetLength={handleSetLength} />
         </div>
         <div className={styles['title-container']}>
            <Title title='Дата (ДД.ММ.ГГГГ)' />
            <Title title='Пройдено, км' />
            <Title title='Действия' />
         </div>
         <div className={styles['results-container']}>
            <Result date={date} length={length} />
         </div>
      </>
   );
};

export default App;
