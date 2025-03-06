import React, { useState } from 'react';

function Page1() {
  const [inputString, setInputString] = useState('');
  const [camelCaseString, setCamelCaseString] = useState('');

  async function navigateToPage2() {
    document.location.href = "http://localhost:3000/Page2";
  }

  function toCamelCase(str) {
    str = str.replace(/[-_]/g, ' ');
    const words = str.split(' ');
    // Convert words to camelCase
    return words[0] + words.slice(1).map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('');
  }

  const handleChange = (event) => {
    const value = event.target.value;
    setInputString(value);
    setCamelCaseString(toCamelCase(value));
  };

  return (
    <div className="write">
      <center><h1>Страница 1</h1></center><br/>
      <p>Задание 1.4:<br/>
      Пример: the-stealth-warrior - theStealthWarrior</p>
      <input onChange={handleChange} /> = {camelCaseString}<br/><br/>
      <button className='button_text' onClick={navigateToPage2}>Переход на страницу 2</button>
    </div>
  );
}

export default Page1;