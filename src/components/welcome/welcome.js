import React from 'react';
import logo from '../../../public/assets/images/logo.png';
import style from './welcome.scss';

const Welcome = () => (
  <div style={{ textAlign: 'center' }}>
    <img src={logo} alt="logo" />
    <h3 style={{ color: 'navy' }}>Welcome to Authors Haven</h3>
    <div className={style}>
      {' '}
      <p>saas is working </p>
    </div>
  </div>
);

export default Welcome;
