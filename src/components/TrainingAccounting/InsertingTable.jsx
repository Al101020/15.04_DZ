import AddLines from './AddLines.jsx';

export const InsertingTable = ({strolls}) => {
  // const str_s = {strolls};
  // console.log(str_s);
  // console.log(str_s.strolls);
  // console.log(str_s.strolls[0]);
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
          { console.log({strolls}) }
          <AddLines strolls={strolls} />
        </ul>
      </div>
    </>
  );
};