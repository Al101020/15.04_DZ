import './TrainingAccounting.css';
import { useState } from 'react';
import { FormForEnteringInformation } from './FormForEnteringInformation.jsx';
import { InsertingTable } from './InsertingTable.jsx';

export const TrainingAccounting = () => {

  const [strolls, setStrolls] = useState([]);// console.log(strolls);

  const insertingTable = (stroll) => {
    const newStrolls = [...strolls];
    const searchDate = newStrolls.find((line) => line.date === stroll.date);

    if (searchDate) {
      searchDate.distance += stroll.distance;
    } else {
      newStrolls.push(stroll);
      newStrolls.sort((a, b) => Date.parse(b.date) - Date.parse(a.date));
    }

    setStrolls(newStrolls);
  };
// ------------
  const idLineDel = (id) => {
    setStrolls((strollsWithoutIdLine) => strollsWithoutIdLine.filter((line) => line.id !== id));
  };
// ------------
  return (
    <div className='trainingAccounting' autoComplete='off'>
      <FormForEnteringInformation insertingTable={insertingTable} />
      <InsertingTable strolls={strolls} idLineDel={idLineDel} />
    </div>
  );
};
