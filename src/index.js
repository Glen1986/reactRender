import React from 'react';
import ReactDOM from 'react-dom';
import {notes} from './Table'

import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App  notes = {notes}/>
  </React.StrictMode>,
  document.getElementById('root')
);

