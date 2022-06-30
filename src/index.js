import React from 'react';
//import ReactDOM from 'react-dom';
import ReactDOM from 'react-dom/client';
import './index.css'
import reportWebVitals from './reportWebVitals';
import AppAmazon from './AppAmazon';
import Apps from './Apps';
import Apss from './ImageSlider/Apss';
// ReactDOM.render(
//   <React.StrictMode>
//    
//   </React.StrictMode>,
//   document.getElementById('root')
// );
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <AppAmazon/>
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
