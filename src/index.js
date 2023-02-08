import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Sec from './Sec';
import Third from './Third';
import Fourth from './Fourth';
import Fifth from './Fifth';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />    
    <Sec />
    <Third />
    <Fourth />
    <Fifth />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
