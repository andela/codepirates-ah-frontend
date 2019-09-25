<<<<<<< HEAD:src/components/testpage.js
import React from "react";
import logo from "../images/logo.png";
import style from "./testpage.scss";
const TestPage = () => (
  <div style={{ textAlign: "center" }}>
=======
import React from 'react';
import logo from '../images/logo.png';

const App = () => (
  <div style={{ textAlign: 'center' }}>
>>>>>>> routing (finish setup routing):src/components/app.js
    <img src={logo} alt="logo" />
    <h3 style={{ color: "navy" }}>Welcome to Authors Haven</h3>
    <div className={style}>
      <p>Sass loaders are working now!</p>
    </div>
  </div>
);

export default App;
