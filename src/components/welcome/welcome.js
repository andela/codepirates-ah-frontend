import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import logo from '../../../public/assets/images/logo.png';
import style from './welcome.scss';
import displayWelcomeMessage from '../../helpers/displayWelcomeMessage';

class Welcome extends Component {
  componentDidMount() {
    displayWelcomeMessage(this.props);
  }

  render() {
    return (
      <div>
        <ToastContainer position={toast.POSITION.TOP_RIGHT} />
        <div style={{ textAlign: 'center' }}>
          <img src={logo} alt="logo" />
          <h3 style={{ color: 'navy' }}>
          Welcome to Authors Haven
            {' '}
          </h3>
          <div className={style}>
            {' '}
            <p>saas is working </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Welcome;
