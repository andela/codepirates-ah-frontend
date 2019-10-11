import React from 'react';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'react-toastify/dist/ReactToastify.css';
import Routes from './Routes';
import Footer from './presentation/footer/Footer';

const App = () => (
  <div>
    <BrowserRouter>
      <ToastContainer />
      <Routes />
    </BrowserRouter>
<<<<<<< HEAD
    ,
=======
    <Footer />
>>>>>>> mend
  </div>
);
export default App;
