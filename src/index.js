import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './SignUpForm/Signup.css'
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import Login from './Login';
import LoginRouter from './LoginRouter';

ReactDOM.render(
  <>
  <BrowserRouter>
    <App />
    </BrowserRouter>
    </>,
  document.getElementById('root')
);


