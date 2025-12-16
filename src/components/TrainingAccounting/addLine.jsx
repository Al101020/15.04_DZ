import { edit } from './edit.jsx';
import { del } from './del.jsx';

export function addLine(target) {
  const date = target.children[0].children[0].children[1].value;
  const km = target.children[0].children[1].children[1].value;
  const table = target.children[1].children[1]    // console.log(table); // куда вставляем
  
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
  editLine.onclick = edit;
  const delLine = document.createElement('div');
  delLine.className = 'delLine';
  delLine.onclick = del;
  editX.append(editLine);
  editX.append(delLine);

  line.append(dateLine);
  line.append(kmLine);
  line.append(editX);

  table.append(line);
};