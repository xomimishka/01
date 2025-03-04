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
      {/* Навигационная панель с бургер-меню */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="#">Мой сайт</a>
          
          {/* Кнопка для бургер-меню на мобильных устройствах */}
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Контекстное меню */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" href="#">Главная</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">О нас</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={goToPage1}>На страницу 1</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Кнопка для смены темы */}
      <button className="row" onClick={toggleTheme}>
        Сменить тему
      </button>

      {/* Заголовок страницы */}
      <div className="text-center fadeIn">
        <h1 className="my-4">Страница 2</h1>
      </div>

      {/* Контейнер с текстом и кнопкой */}
      <div className="container">
        <h2 className="text-primary text-center">Привет, мир!</h2>
        <div className="d-flex justify-content-center">
          <button className="btn btn-success">Кнопка</button>
        </div>
      </div>

      {/* Сетка с тремя равными колонками */}
      <div className="container my-4">
        <div className="row mt-4">
          <div className="col-12 col-md-4">
            <div className="p-3 bg-light border">1</div>
          </div>
          <div className="col-12 col-md-4">
            <div className="p-3 bg-light border">2</div>
          </div>
          <div className="col-12 col-md-4">
            <div className="p-3 bg-light border">3</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page2;