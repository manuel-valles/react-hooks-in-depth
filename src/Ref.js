import React, { useState, useRef } from 'react';

const RefComponent = () => {
  const [stateNumber, setStateNumber] = useState(0);
  const numberRef = useRef(0);

  const incrementAndDelayLogging = () => {
    setStateNumber(stateNumber + 1);
    numberRef.current++;
    setTimeout(
      () => alert(`state: ${stateNumber} | ref: ${numberRef.current}`),
      1000
    );
  };

  return (
    <div>
      <h1>useRef Example</h1>
      <button onClick={incrementAndDelayLogging}>delay logging</button>
      <h4>state: {stateNumber}</h4>
      <h4>ref: {numberRef.current}</h4>
    </div>
  );
};

export default RefComponent;
