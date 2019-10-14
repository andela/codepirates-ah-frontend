import React, { Component } from 'react';
import { connect } from 'react-redux';
import queryString from 'query-string';
import PropTypes from 'prop-types';
import { verifyAccount } from '../../redux/actions/signup/verification';

export class EmailVerification extends Component {
    state = { }

    style = {
      height: 'auto',


      margin: '0 auto',
    }

    componentDidMount() {
      const { location } = this.props;
      const { token } = queryString.parse(location.search);
      if (token) {
        const { verifyAccount: verify } = this.props;
        verify(token);
      }
    }

    visitHome = () => {
      const { history } = this.props;
      return history.push('/');
    };

    render() {
      const style = {
        boxShadow: '1px 1px 9px 1px rgba(0, 0, 0, 0.2)',
        backgroundColor: 'white',
        margin: '4em auto',
      };
      return (
        <div className="container jumbotron" style={style}>
          <h1 className="display-4">Account Verified!</h1>
          <p className="lead">Thank you for verification. You are successfully registered</p>
          <hr className="my-4" />
          <p>You may now log-in with the username you have chosen.</p>
          <button type="button" className="btn btn-primary btn-lg" href="#" id="visit-home-btn" onClick={this.visitHome}>Proceed</button>
        </div>
      );
    }
}

EmailVerification.propTypes = {
  location: PropTypes.object.isRequired,
  search: PropTypes.string.isRequired,
  history: PropTypes.func.isRequired,
  verifyAccount: PropTypes.func.isRequired,
};
export const mapStateToProps = () => ({

});

export default connect(mapStateToProps, { verifyAccount })(EmailVerification);
