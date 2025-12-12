import "./ColorConverter.css";

export const ColorConverter = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // console.log("Event type:", e.type);    
    console.log(e.target);
    // const eTarget = e.target as HTMLInputElement;
    // const valueColor = eTarget.childElementCount;
    // console.log(valueColor);
    // const valueColo = eTarget;
    // console.log(valueColo);
  };

  return (
    <form className="colorConverter" autoComplete="off" onChange={handleSubmit}>
      <input type="text" id="colorHex" name="colorHex" />
      <div id="colorRGB"></div>
    </form>
  );
};