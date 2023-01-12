import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { RouterProvider } from 'react-router-dom';
import { getRouter } from './core/router';
import { i18nInit } from './core/i18n';


//Import CSS files.
import '../node_modules/normalize.css/normalize.css';
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css';
import './index.css';
 

//Initialize i18n.
i18nInit();

//Create the root element.
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

//Render the router starting from the root element.
root.render(
  <React.StrictMode>
    <RouterProvider router={getRouter()}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
