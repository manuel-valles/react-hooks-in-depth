import React from 'react';
import { render } from 'react-dom';
import CallbackComponent from './Callback';
import ContextComponent from './Context';
import EffectComponent from './Effect';
import ImperativeHandleComponent from './ImpertiveHandle';
import LayoutEffectComponent from './LayoutEffect';
import MemoComponent from './Memo';
import ReducerComponent from './Reducer';
import RefComponent from './Ref';
import StateComponent from './State';

const App = () => {
  return (
    <React.StrictMode>
      <div className="App">
        <StateComponent />
        <hr />
        <EffectComponent />
        <hr />
        <ContextComponent />
        <hr />
        <RefComponent />
        <hr />
        <ReducerComponent />
        <hr />
        <MemoComponent />
        <hr />
        <CallbackComponent />
        <hr />
        <LayoutEffectComponent />
        <hr />
        <ImperativeHandleComponent />
      </div>
    </React.StrictMode>
  );
};

render(<App />, document.getElementById('root'));
