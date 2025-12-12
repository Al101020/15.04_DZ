import React from "react";

export const Feedback = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Event type:", e.type);
    console.log(e.target);
  };

  return (
    <form className="form" autoComplete="off" onSubmit={handleSubmit}>
      <label htmlFor="name1">Ваше имя</label>
      <input type="text" id="name1" name="name1" />

      <label htmlFor="score">Выберите ур. удовлетворенности</label>
      <select id="score" name="score">
        <option value="good">Хорошо</option>
        <option value="bad">Не очень</option>
      </select>

      <div className="form__agreement">
        <input type="checkbox" id="agreement" name="agreement" />
        <label htmlFor="agreement">Согласен на обработку данных</label>
      </div>

      <button type="submit">Отправить</button>
    </form>
  );
};
