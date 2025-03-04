import React, { useState } from 'react';

function Page1() {
  const [count, setCount] = useState(0);
  async function name() {
    document.location.href = "http://localhost:3000/Page2";
  }

  return (
    <div className="write">
      <center><h1>Страница 1</h1></center>
      <h1>Счётчик: {count}</h1>
      <button className='button_text' onClick={() => setCount(count + 1)}>Увеличить</button>
      <button className='button_text' onClick={() => setCount(count - 1)}>Уменьшить</button>
      <br />

      <button className='button_text' onClick={() => name()}>Страница 2</button>
    </div>
  );
}

export default Page1;
