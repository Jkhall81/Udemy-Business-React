import React, { useState, useEffect } from "react";

const Message = () => {
  const [advice, setAdvice] = useState([]);
  const [count, setCount] = useState(0);

  async function getAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setAdvice([...advice, data.slip.advice]);
  }

  const countAdvice = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    getAdvice();
    countAdvice();
  }, []);
  return (
    <div>
      <h1>sup homie</h1>
      <button
        onClick={() => {
          getAdvice();
          countAdvice();
        }}
      >
        Get Advice
      </button>
      <h2>{count}</h2>
      <div>
        {advice.map((item, index) => (
          <h1 key={index}>{item}</h1>
        ))}
      </div>
    </div>
  );
};

export default Message;
