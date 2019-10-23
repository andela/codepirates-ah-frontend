/* eslint-disable react/no-unused-state */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { ToastContainer, toast } from 'react-toastify';

import Request from './requestform';
import Reset from './resetform';
import NavBar from './components/navbar';
// import resetConstants from '../../helpers/passwordResetConstants';

// import resetRequest from '../../events';
import {
  responseMessage as Message,
  resetRequest,
} from '../../redux/actions/passwordreset';
import { sent, done } from '../../helpers/passwordResetConstants';

import './progressanimation.css';

/**
 * @class - Password reset container Component
 * @param {object} props
 * @returns {JSX} - Social Button JSX template
 */
export class ResetRequest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      confirmPassword: '',
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.resetRequest(this.props, this.state);
  };

  onSendRequest = async (resetRequestHandler) => {
    const { history, location, responseMessage } = this.props;
    this.setState({ progress: 'loading' });
    const { email } = this.state;
    const emailSent = sent(email);
    const { search } = location;
    const [title, detail] = search
      ? ['Password reset successful', done]
      : ['Password reset link sent', emailSent];
    const res = await resetRequestHandler(this);
    const json = await res.json();
    const msg = await json.message;
    responseMessage(res.ok ? detail : msg, title);
    this.setState({ progress: 'loaded' });
    if (res.ok) {
      toast.success(detail);
      history.push('/resetpasswordresponse');
    } else {
      toast.error(msg);
    }
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { handleSubmit, handleChange } = this;
    const { progress, email } = this.state;
    const { location, message } = this.props;
    const form = !location.search ? (
      <Request
        handleSubmit={handleSubmit}
        message={message}
        handleChange={handleChange}
        email={email}
      />
    ) : (
      <Reset
        handleSubmit={handleSubmit}
        message={message}
        handleChange={handleChange}
      />
    );
    return (
      <div className="container styles">
        <ToastContainer position={toast.POSITION.TOP_RIGHT} />
        <NavBar />
        {form}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  message: state.passwordReset.message,
  email: state.passwordReset.email,
});

const dispatchProps = (dispatch) => ({
  responseMessage: (m, n) => dispatch(Message(m, n)),
});

ResetRequest.propTypes = {
  responseMessage: PropTypes.func.isRequired,
  message: PropTypes.string,
  location: PropTypes.object.isRequired,
  history: PropTypes.array,
};

ResetRequest.defaultProps = {
  message: '',
  history: [],
};

export default connect(
  mapStateToProps,
  { resetRequest },
)(ResetRequest);
