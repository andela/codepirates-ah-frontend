import React from "react";
import logo from "../images/logo.png";
import style from "./testpage.scss";
const TestPage = () => (
  <div style={{ textAlign: "center" }}>
    <img src={logo} alt="logo" />
    <h3 style={{ color: "navy" }}>Welcome to Authors Haven</h3>
    <div className={style}>
      <p>Sass loaders are working now!</p>
    </div>
  </div>
);

export default TestPage;
