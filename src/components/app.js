import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Routes from './Routes';

const App = () => (
  <div>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
,
  </div>
);
export default App;
