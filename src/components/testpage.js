import React, { PureComponent } from 'react';
// import logo from '../images/logo.png';

class TestPage extends PureComponent {
  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <img src="../images/logo.png" alt="logo" />
        <h3 style={{ color: 'navy' }}>Welcome to Authors Haven</h3>
      </div>
    );
  }
}

export default TestPage;
