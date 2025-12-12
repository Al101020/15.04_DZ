import "./ColorConverter.css";

export const ColorConverter = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Event type:", e.type);
    console.log(e.target);
  };

  return (
    <div>
      <form className="colorConverter" autoComplete="off" onSubmit={handleSubmit}>
        <input type="text" id="colorHex" name="colorHex" />
        <div id="colorRGB"></div>
      </form>
    </div>
  );
};