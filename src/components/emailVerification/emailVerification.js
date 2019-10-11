import React, { Component } from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';
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
  location: PropTypes.object.isRequired,
  search: PropTypes.string.isRequired,
  history: PropTypes.func.isRequired,
  verifyAccount: PropTypes.func.isRequired,
};
const mapStateToProps = () => ({

});

export default connect(mapStateToProps, { verifyAccount })(EmailVerification);
