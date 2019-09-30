import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import { ToastContainer, toast } from 'react-toastify';
import Routes from './Routes';

const App = () => (
  <div>
    <ToastContainer position={toast.POSITION.TOP_RIGHT} />
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
,
  </div>
);
export default App;
