import React from 'react';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'react-toastify/dist/ReactToastify.css';
import Routes from './Routes';
import Footer from './common/footer/Footer';
import { NavBar } from './common/navbar/navbar';

const App = () => (
  <div>
    <BrowserRouter>
      <NavBar />
      <ToastContainer />
      <Routes />
    </BrowserRouter>
    <Footer />
  </div>
);
export default App;
