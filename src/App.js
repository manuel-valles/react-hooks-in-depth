import React from 'react';
import { render } from 'react-dom';
import State from './State';

const App = () => {
  return (
    <React.StrictMode>
      <div className="App">
        <State />
        <hr />
      </div>
    </React.StrictMode>
  );
};

render(<App />, document.getElementById('root'));
