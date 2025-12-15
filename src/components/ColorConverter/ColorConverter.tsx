import "./ColorConverter.css";
import React,{ useState } from "react";

export const ColorConverter = () => {
  const [value, setValue] = useState('#');
  const [rgb, setRgb] = useState('Ошибка!!!');

  const regexp = /#[a-f0-9]{6}/gi;
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();    // console.log("Event type:", e.type);    // console.log(e);

    const input = e.target.value;    // console.log(input);

    

    if (input.match(regexp) !== null) {
      console.log('(regexp) !== null'); 
      setValue(input);
      setRgb(input);
    } else {
      console.log('Ошибка!!!');
      setValue(input);
      setRgb('Ошибка!!!');
    }

        
    // console.log({value});
 
  };

  return (
    <form className="colorConverter" autoComplete="off">
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