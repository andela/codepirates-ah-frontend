import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import queryString from 'query-string';
import socialAuth from '../../../../redux/actions/socialAuth';

/**
 * @class Home
 * @extends {Component}
 */
export class VerifyAuth extends Component {
  /**
   * @method componentDidMount
   * @returns {boolean} changed state
   */
  componentDidMount() {
    const { props } = this;
    const { location: { search, pathname } } = props;
    const { socialToken } = queryString.parse(search);
    if (socialToken) {
      localStorage.setItem('token', socialToken);
    }
    if (this.checkAuthType(pathname) === 'twitter') {
      props.socialAuth(socialToken, 'twitter');
    }

    if (this.checkAuthType(pathname) === 'facebook') {
      props
        .socialAuth(socialToken, 'facebook');
    }

    if (this.checkAuthType(pathname) === 'google') {
      props.socialAuth(socialToken, 'google');
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
    const { isAuthenticated } = this.props;
    return (
      <>
        <p>welcome back we are social authenticating</p>
        {isAuthenticated === true ? <Redirect to="/" /> : null }
        {isAuthenticated === false
          ? <Redirect to="/login" /> : null }
      </>
    );
  }
}

VerifyAuth.propTypes = {
  socialAuth: PropTypes.func.isRequired,
  location: PropTypes.object.isRequired,
  isAuthenticated: PropTypes.bool,
};
const mapStateToProps = (state) => (
  {
    ...state.socialAuthReducer,
  }
);
export default connect(mapStateToProps, { socialAuth })(VerifyAuth);
