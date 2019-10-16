import React from 'react';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'react-toastify/dist/ReactToastify.css';
import 'rc-pagination/assets/index.css';
import Routes from './Routes';

const App = () => (
  <div>
    <BrowserRouter>
      <ToastContainer />
      <Routes />
    </BrowserRouter>
    ,
  </div>
);
export default App;
