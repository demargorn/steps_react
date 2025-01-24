import { useState } from 'react';
import Form from './Form/Form';
import Title from './Title/Title';
import Result from './Result/Result';
import styles from './App.module.css';

let maxId = 100;

const App = () => {
   const [resultData, setResultData] = useState([]);

   function createResult(date, length) {
      return {
         date: date,
         length: length,
         id: maxId++,
      };
   }

   const addResult = ({ date, length }) => {
      const newResult = createResult(date, length);
      return setResultData([...resultData, newResult]);
   };

   const deleteResult = (id) => {
      const idx = resultData.findIndex((item) => item.id === id);
      return setResultData([...resultData.slice(0, idx), ...resultData.slice(idx + 1)]);
   };

   function sortedResults(items) {
      return items.sort((a, b) => a.date < b.date);
   }

   return (
      <div className={styles['app']}>
         <div className={styles['form-container']}>
            <Form onAdded={addResult} />
         </div>
         <div className={styles['title-container']}>
            <Title title='Дата (ДД.ММ.ГГГГ)' />
            <Title title='Пройдено, км' />
            <Title title='Действия' />
         </div>
         <div className={styles['results-container']}>
            <Result results={sortedResults(resultData)} onDelete={deleteResult} />
         </div>
      </div>
   );
};

export default App;
