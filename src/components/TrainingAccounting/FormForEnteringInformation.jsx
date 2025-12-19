import { useState } from 'react';
import uniqid from 'uniqid';

export const FormForEnteringInformation = ({insertingTable}) => {
  const [infForm, setInfForm] = useState({ date: '', distance: '' });

  const onChange = ({ target }) => {
    const name = target.name;
    const value = target.value;

    setInfForm((prevForm) => ({ ...prevForm, [name]: value }));    // console.log(infForm);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const stroll = {
      id: uniqid(),
      date: infForm.date,
      distance: Number(infForm.distance),
    };

    insertingTable(stroll);
    
    setInfForm({ date: '', distance: '' });
  };

  return (
    
      <form className='form' autoComplete='off' onSubmit={handleSubmit}>
        <div className='date'>
          <label htmlFor='date'>Дата (ДД.ММ.ГГ)</label>
          <input type="date" id='date' name='date' onChange={onChange} required /> 
        </div>
        <div className='distance'>
          <label htmlFor='distance'>Пройдено км</label>
          <input type='number' id='distance' name='distance' onChange={onChange} required />
        </div>
         <button className='ok' type='submit'>ок</button>
      </form>
    
  );
};
