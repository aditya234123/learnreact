import React from 'react';
import ReactDOM from 'react-dom';
import {Note,AddButton,RemoveButton} from './App';
import './index.css';

ReactDOM.render(
  <Note />,
  document.getElementById('note')
);

ReactDOM.render(
  <div id = "button-holder"><AddButton /><RemoveButton /></div>,
  document.getElementById('button-panel')
);
