import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Page2() {
  // Состояние для изменения темы
  const [color, setColor] = useState("write");

  // Функция для смены темы
  const toggleTheme = () => {
    if (color === "write") {
      setColor("black");
    } else {
      setColor("write");
    }
  };

  // Функция для перехода на Page1
  const goToPage1 = () => {
    document.location.href = "http://localhost:3000/Page1";
  };

  return (
    <div className={color}>
      <br />
      <a className="nav-link" href="#" onClick={goToPage1}>Переход на страницу 1</a><br />

      <button className="row" onClick={toggleTheme}>
        Сменить тему
      </button>

      <div className="text-center fadeIn">
        <h1 className="my-4">Страница 2</h1>
      </div>
    </div>
  );
}

export default Page2;