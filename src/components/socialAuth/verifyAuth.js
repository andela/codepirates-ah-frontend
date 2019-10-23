import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import queryString from 'query-string';
import { socialAuth } from '../../redux/actions/socialAuth/socialAuth';
import Navbar from '../common/navbar/navbar';

/**
 * @class Home
 * @extends {Component}
 */
export class VerifyAuth extends Component {
  /**
   * @method componentDidMount
   * @returns {boolean} changed state
   */
  async componentDidMount() {
    const { props } = this;
    const { location: { search, pathname } } = props;
    const { socialToken } = queryString.parse(search);
    if (socialToken) {
      await localStorage.removeItem('token');
      await localStorage.setItem('token', socialToken);
    }
    if (this.checkAuthType(pathname) === 'twitter') {
      await props.socialAuth(socialToken, 'twitter');
    }

    if (this.checkAuthType(pathname) === 'facebook') {
      await props
        .socialAuth(socialToken, 'facebook');
    }

    if (this.checkAuthType(pathname) === 'google') {
      await props.socialAuth(socialToken, 'google');
    }
  }


  /**
   *  @description checks for type of social auth
   *  @param {string} urlString
   * @memberof VerifyAuth
   * @returns {string} null
   */
  checkAuthType = (urlString) => {
    if (urlString.includes('twitter')) return 'twitter';
    if (urlString.includes('facebook')) return 'facebook';
    if (urlString.includes('google')) return 'google';
    return 'false';
  }

  /**
   * @returns {JSX} Html template
   * @memberof Home
   */
  render() {
    const { isLoggedIn } = this.props;
    if (!isLoggedIn) return (
      <>
        <Navbar />
        {' '}
        <p>welcome back we are social authenticating</p>
      </>
    );
    return (
      <>
        {isLoggedIn ? <Redirect to="/" /> : <Redirect to="/login" /> }
      </>
    );
  }
}

VerifyAuth.propTypes = {
  socialAuth: PropTypes.func.isRequired,
  location: PropTypes.object.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
};
export const mapStateToProps = (state) => (
  {
    ...state.user,
  }
);
export default connect(mapStateToProps, { socialAuth })(VerifyAuth);
