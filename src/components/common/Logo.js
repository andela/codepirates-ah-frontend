import React from 'react';
import logo from '../../../public/assets/images/logo2.png';
import commonStyle from './common.scss';

export default function Logo() {
  return (
    <div className="registration--logo-div" style={commonStyle}>
      <a href="/">
        <img src={logo} alt="Authors haven logo" style={{ height: '120px', width: '120px' }} />
      </a>
    </div>
  );
}
