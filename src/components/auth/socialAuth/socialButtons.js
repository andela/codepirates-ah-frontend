import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { ToastContainer, toast } from 'react-toastify';
import socialAuth from '../../../redux/actions/socialAuth';


export class SocialButtons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleClick = (authType) => {
    socialAuth(authType);
  }

  render() {
    const socialMediaLogin = [{
      className: 'btn-google',
      key: 'google',
    },
    {
      className: 'btn-facebook',
      key: 'facebook',

    },
    {
      className: 'btn-twitter',
      key: 'twitter',
    }].map((socialIcon) => (
      <a onClick={handleClick(socialIcon.key)} key={socialIcon.key} className="social-btn">
        <div className={socialIcon.className}>{socialIcon.skey}</div>
      </a>
    ));
    return (
      <>
        <div className="col-md-6 registration--middle-row__right-part">
          <div>
            <ToastContainer position={toast.POSITION.TOP_RIGHT} />
            {socialMediaLogin}
          </div>
        </div>

      </>
    );
  }
}

SocialButtons.propTypes = {
  socialAuth: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.socialAuthReducer.isAuthenticated,
  error: state.socialAuthReducer.error,
  newUser: state.socialAuthReducer.newUser,
  isLoading: state.socialAuthReducer.isLoading,
});

export default connect(
  mapStateToProps,
)(socialAuth);
