import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './app';
import TestPage from './components/testpage';
import store from './redux/store';
import 'bootstrap/dist/css/bootstrap.css';
import Routes from './Routes';


render(
  <BrowserRouter>
    <Routes />
  </BrowserRouter>,
  document.getElementById('root'),
);
