import AddLines from './AddLines.jsx';

export const InsertingTable = ({strolls}) => {
  
  return (
    <>
      <div className='table' autoComplete='off'>
        <div className='tableAndTitle'>
          <div className='tableTitle'>
            <p className='pDate'>Дата (ДД.ММ.ГГ)</p>
            <p className='pCompleted'>Пройдено км</p>
            <p className='pActions'>Действия</p>
          </div>
        </div>
        <ul className='tableData'>
          <AddLines props={strolls} />
        </ul>
      </div>
    </>
  );
};