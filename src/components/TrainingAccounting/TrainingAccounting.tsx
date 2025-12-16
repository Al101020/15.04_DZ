import "./TrainingAccounting.css";
// import { addRowTable } from "./addRowTable.tsx";
import React from "react";// , { ReactNode }
// import { JSX } from "react";
import { edit } from "./edit.tsx";
import { del } from "./del.tsx";

let divDate;
let divKm;

export const TrainingAccounting = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // console.log("Event type: ", e.type);
    const target = e.target as Element ;
    divDate = target.children[0].children[0].children[1];
    console.log(e.target as Element);
    
    const date = target.children[0].children[0].children[1].value;
    // console.log(date); // Дата
    divKm = target.children[0].children[1].children[1];
    const km = target.children[0].children[1].children[1].value;
    // console.log(km); // Пройдено км
    const table = target.children[1].children[1]
    console.log(table); // куда вставляем

    const addLine = () => {
      const line = document.createElement('div');
      line.className = 'line';
      const kmLine = document.createElement('div');
      kmLine.className = 'kmLine';
      kmLine.textContent = km;
      const dateLine = document.createElement('div');
      dateLine.className = 'dateLine';
      dateLine.textContent = date;

      const editX = document.createElement('div');
      editX.className = 'editX';
      const editLine = document.createElement('div');
      editLine.className = 'editLine';
      // editLine.textContent = 'E';
      editLine.onclick = edit;
      const delLine = document.createElement('div');
      delLine.className = 'delLine';
      // delLine.textContent = 'X';
      delLine.onclick = del;
      editX.append(editLine);
      editX.append(delLine);
      
      line.append(dateLine);
      line.append(kmLine);
      line.append(editX);
      

      table.append(line);
    };

    if (date && km) {
      addLine();
      // console.log(divDate.value);
      divDate.value = '';
      // console.log(divDate.value);
      // km = '';
      // console.log(divKm.value);
      divKm.value = '';
      // console.log(divKm.value);
    };
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
