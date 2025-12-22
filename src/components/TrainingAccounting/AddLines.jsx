export default function AddLines({strolls,  idLineDel}) {
  const edit = () => console.log('кнопка edit');
  if (strolls !== undefined) {
    return (
      <>
        {strolls.map((line) => (
          <li className="line" key={line.id}>
            <div  className="dateLine">{line.date}</div>
            <div className="kmLine">{line.distance}</div>
            <div className="editX">
              <div className="editLine" onClick={edit}></div>
              <div  className="delLine" onClick={() => idLineDel(line.id)}></div>
            </div>
          </li>
        ))}
      </>
    );
  }
};
