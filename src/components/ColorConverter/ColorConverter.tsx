import "./ColorConverter.css";
import React,{ useState } from "react";

function fromHexInRgb(hex: string) {    // console.log(hex);
    // Удалить символ «#», если он присутствует  
    hex = hex.replace(/^#/, '');  
    // Разобрать шестнадцатеричные значения на компоненты  
    const r = parseInt(hex.substring(0, 2), 16);  
    const g = parseInt(hex.substring(2, 4), 16);  
    const b = parseInt(hex.substring(4, 6), 16);  
    // Вернуть значения RGB в виде объекта  

    console.log({ r, g, b });
    return { r, g, b };  
};


export const ColorConverter = () => {
  const [value, setValue] = useState('#');
  const [rgb, setRgb] = useState('Ошибка!!!');

  const regexp = /#[a-f0-9]{6}/gi;
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();    // console.log("Event type:", e.type);    // console.log(e);

    const input = e.target.value;    // console.log(input);

    

    if (input.match(regexp) !== null) {
      // console.log('(regexp) !== null'); 
      setValue(input);
      // setRgb(input);
      const { r, g, b } = fromHexInRgb(input);
        setRgb(`rgb(${r}, ${g}, ${b})`);
    } else {
      console.log('Ошибка!!!');
      setValue(input);
      setRgb('Ошибка!!!');
    }

        
    // console.log({value});
 
  };

  return (
    //  ${condition ? 'conditional-class-one' : ''
    // {condition ? 'class-if-true' : 'class-if-false'}
    // form className="colorConverter" autoComplete="off"> // было
    <form 
      className={`colorConverter ${rgb !== 'Ошибка!!!' ? 'classRGB' : 'error'}`} 
      autoComplete="off"
    >
      <input 
      type="text" 
      id="colorHex" 
      name="colorHex"
      maxLength={7} 
      value={value}
      onChange={handleChange} />
      <div id="colorRGB">{rgb}</div>
    </form>
  );
};