import "./ColorConverter.css";
import React,{ useState } from "react";
import { fromHexInRgb } from "./fromHexInRgb.jsx";

export const ColorConverter = () => {
  const [value, setValue] = useState('#');
  const [rgb, setRgb] = useState('Ошибка!');

  const regexp = /#[a-f0-9]{6}/gi;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    if (input.match(regexp) !== null) {
      setValue(input);
      const { r, g, b } = fromHexInRgb(input);
        setRgb(`rgb(${r}, ${g}, ${b})`);
    } else {
      setValue(input);
      setRgb('Ошибка!');
    }
  };

  return (
    <form 
      style={{ backgroundColor: rgb }}
      className="colorConverter"
      autoComplete="off"
    >
      <input 
        type="text" 
        id="colorHex" 
        name="colorHex"
        maxLength={7} 
        value={value}
        onChange={handleChange} 
      />
      <div id="colorRGB" className={`colorRGB  ${rgb === 'Ошибка!' ? 'error' : ''}`}>
        {rgb}
      </div>
    </form>
  );
};