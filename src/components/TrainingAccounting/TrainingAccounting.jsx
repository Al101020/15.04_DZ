import './TrainingAccounting.css';
import { useState } from 'react';
import { FormForEnteringInformation } from './FormForEnteringInformation.jsx';
import { InsertingTable } from './InsertingTable.jsx';

export const TrainingAccounting = () => {

  const [strolls, setStrolls] = useState([]);// console.log(strolls);

  const insertingTable = (stroll) => {
    const newStrolls = [...strolls];
    // console.log(newStrolls);
    // console.log(newStrolls[0]);
    // for (let i = 0; i <= newStrolls.length; i++) { 
    //   console.log(newStrolls[i].id); // Вывод текущего значения переменной i в консоль 
    // }

    // console.log(stroll);
    const searchDate = newStrolls.find((obj) => obj.date === stroll.date);
    // console.log(searchDate);
    
    if (searchDate) {
      console.log(searchDate);
      console.log(stroll);
      searchDate.distance += stroll.distance;
    } else {
      // console.log(searchDate);
      // console.log(newStrolls);
      
      newStrolls.push(stroll);
      // console.log(stroll);
      // console.log(newStrolls);
      newStrolls.sort((a, b) => Date.parse(b.date) - Date.parse(a.date));
    }

    setStrolls(newStrolls);
  };

  

  return (
    <div className='trainingAccounting' autoComplete='off'>
      <FormForEnteringInformation insertingTable={insertingTable} />
      <InsertingTable strolls={strolls}/>
    </div>
  );
};
