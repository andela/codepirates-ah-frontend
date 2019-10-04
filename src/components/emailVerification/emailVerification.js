import React, { Component } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

class EmailVerification extends Component {
    state = { }

    style = {
      height: 'auto',


      margin: '0 auto',
    }

    visitHome = () => {
      const { history } = this.props;
      return history.push('/');
    };

    render() {
      return (
        <div className={classnames('ui', 'container', 'fullscreen', 'modal', 'transition', 'visible active', { detachable: false })} style={this.style}>
          <div className="header">
          Account Verified
          </div>
          <div className="image content">
            <div className="image">
              <i className="right arrow icon" />
            </div>
            <div className="description">
              <p>Thank you for verification. You are successfully registered</p>
            </div>
          </div>
          <div className="actions">
            <div className="ui primary button" role="presentation" onClick={this.visitHome}>Proceed</div>
          </div>
        </div>
      );
    }
}

EmailVerification.propTypes = {
  history: PropTypes.func.isRequired,
};

export default EmailVerification;
