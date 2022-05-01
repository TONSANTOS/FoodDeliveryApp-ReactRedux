import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import reducer, { initialState } from './Components/Reducer/reducer';
import { StateProvider } from './Components/StateProvider/StateProvider';

import './Styles/index.css';

ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

