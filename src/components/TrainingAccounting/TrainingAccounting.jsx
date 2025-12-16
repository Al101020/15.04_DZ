import './TrainingAccounting.css';
// import { addRowTable } from './addRowTable.tsx';
import React from 'react';
import { addLine  } from './addLine.jsx';

export const TrainingAccounting = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const target = e.target;// console.log(e.target);// addLine(target)
    const date = target.children[0].children[0].children[1].value;
    const km = target.children[0].children[1].children[1].value;

    let divDate;
    let divKm;
    divDate = target.children[0].children[0].children[1];
    divKm = target.children[0].children[1].children[1];
    addLine(target);
    
    if (date && km) {
      addLine(target);      // console.log(divDate.value);
      divDate.value = ''; // console.log(divDate.value); // km = ''; // console.log(divKm.value);
      divKm.value = '';       // console.log(divKm.value);
    };
  };

  return (
    <form className='form2' autoComplete='off' onSubmit={handleSubmit}>
      <div className='dateCompletedOk'>
        <div className='date'>
          <label htmlFor='date'>Дата (ДД.ММ.ГГ)</label>
          <input type='text' id='date' name='date' />
        </div>
        <div className='completed'>
          <label htmlFor='completed'>Пройдено км</label>
          <input type='text' id='completed' name='completed' />
        </div>
        <div className='ok'>
          <button type='submit'>ок</button>
        </div>
      </div>
      <div className='tableAndTitle'>
        <div className='tableTitle'>
          <p className='pDate'>Дата (ДД.ММ.ГГ)</p>
          <p className='pCompleted'>Пройдено км</p>
          <p className='pActions'>Действия</p>
        </div>
        <div className='tableData'></div>
      </div>
    </form>
  );
};
