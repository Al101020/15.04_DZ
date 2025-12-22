import { edit } from './edit.jsx';
import { del } from './del.jsx';

export default function AddLines({strolls,  idLineDel, idLineEdit}) {
  console.log(strolls);
  // console.log(strolls[0]);
  if (strolls !== undefined) {
    return (
      <>
        {console.log(strolls)}
        {/* {if () {}} */}
        {strolls.map((line) => (
          <li className="line" key={line.id}>
            <div  className="dateLine">{line.date}</div>
            <div className="kmLine">{line.distance}</div>
            <div className="editX">
              <div className="editLine" onClick={() => idLineEdit(line.id)}></div>
              <div  className="delLine" onClick={() => idLineDel(line.id)}></div>
            </div>
          </li>
        ))}
      </>
    );
  }
  // return (
  //   <>
  //     {console.log(strolls)}
  //     {/* {if () {}} */}
  //     {strolls.map((line) => (
  //       <li className="line" key={line.id}>
  //         <div  className="dateLine">{line.date}</div>
  //         <div className="kmLine">{line.distance}</div>
  //         <div className="editX">
  //           <div className="editLine" onClick={() => idLineEdit(line.id)}></div>
  //           <div  className="delLine" onClick={() => idLineDel(line.id)}></div>
  //         </div>
  //       </li>
  //     ))}
  //   </>
  // );
};
