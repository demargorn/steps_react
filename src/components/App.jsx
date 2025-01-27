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

   function addResult({ date, length }) {
      const newResult = createResult(date, length);
      const idx = resultData.findIndex((res) => res.date === date);

      if (resultData[idx]) {
         setResultData([
            ...resultData.slice(0, idx),
            {
               ...resultData[idx],
               length: Number(resultData[idx].length) + Number(length),
               id: maxId++,
            },
            ...resultData.slice(idx + 1),
         ]);
      } else {
         setResultData([...resultData, newResult]);
      }
   }

   function deleteResult(id) {
      const idx = resultData.findIndex((res) => res.id === id);
      return setResultData([...resultData.slice(0, idx), ...resultData.slice(idx + 1)]);
   }

   // функция пока только удаляет строку
   function editResult(id) {
      deleteResult(id);
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
            <Result results={resultData} onEdit={editResult} onDelete={deleteResult} />
         </div>
      </div>
   );
};

export default App;
