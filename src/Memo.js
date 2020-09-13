import React, { useState, useMemo } from 'react';

const fibonacci = (n) => (n <= 1 ? 1 : fibonacci(n - 1) + fibonacci(n - 2));

const MemoComponent = () => {
  const [num, setNum] = useState(35);
  const [isGreen, setIsGreen] = useState(true);
  const fib = useMemo(() => fibonacci(num), [num]);
  // To check it out just swap the line above for the below
  // const fib = fibonacci(num);

  return (
    <div>
      <h1
        onClick={() => setIsGreen(!isGreen)}
        style={{ color: isGreen ? 'limegreen' : 'crimson' }}
      >
        useMemo Example
      </h1>
      <span>
        Fibonacci of <b>{num}</b> is <b>{fib} </b>
      </span>
      <button onClick={() => setNum(num + 1)}>➕</button>
    </div>
  );
};

export default MemoComponent;
