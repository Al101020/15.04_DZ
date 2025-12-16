export function fromHexInRgb(hex: string) {    // Удалить символ «#», если он присутствует  
  hex = hex.replace(/^#/, '');  
  const r = parseInt(hex.substring(0, 2), 16);    // Разобрать шестнадцатеричные значения
  const g = parseInt(hex.substring(2, 4), 16);  
  const b = parseInt(hex.substring(4, 6), 16);      // Вернуть значения RGB в виде объекта
  return { r, g, b };  
};