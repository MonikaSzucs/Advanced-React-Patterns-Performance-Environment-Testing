import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './App';
//import App from './1-App-Button';
//import App from './2-App-State-Machine';
//import App from './3-1-Fetch-On-PageLoad';
//import App from './3-2-Fetch-On-Click';
//import App from './3-3-Fetch-On-Click-Error';
//import App from './3-4-Fetch-On-Click-Managing-Errors';
//import App from './4-Compound-Components';

import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
