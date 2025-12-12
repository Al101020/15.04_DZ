// import { useState } from "react";
// import { v4 as uuidv4 } from "uuid";
import "./TrainingAccounting.css";

export const TrainingAccounting = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Event type:", e.type);
    console.log(e.target);
  };

  return (
    // <div>
      <form className="form2" autoComplete="off" onSubmit={handleSubmit}>
        <div className="dateCompletedOk">
          <div className="date">
            <label htmlFor="date">Дата (ДД.ММ.ГГ)</label>
            <input type="text" id="date" name="date" />
          </div>
          <div className="completed">
            <label htmlFor="completed">Пройдено км</label>
            <input type="text" id="completed" name="completed" />
          </div>
          <div className="ok">
            <button type="submit">ок</button>
          </div>
        </div>
        <div className="tableAndTitle">
          <div className="tableTitle">
            <p className="pDate">Дата (ДД.ММ.ГГ)</p>
            <p className="pCompleted">Пройдено км</p>
            <p className="pActions">Действия</p>
          </div>
          <div className="tableData"></div>
        </div>
      </form>
    // </div>
    
  );
};
