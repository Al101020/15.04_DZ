import { edit } from './edit.jsx';
import { del } from './del.jsx';

export default function AddLines(strolls) {
  return (
    <>
      {strolls.props.map((line) => (
          <li className="line" key={line.id}>
            <div  className="dateLine">{line.date}</div>
            <div className="line">{line.distance}</div>
            <div className="editX">
              <div className="editLine" onClick={edit}></div>
              <div  className="delLine" onClick={del}></div>
            </div>
          </li>
        ))}
    </>
  );
};
