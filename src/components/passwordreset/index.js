import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { ToastContainer, toast } from 'react-toastify';

import Request from './requestform';
import Reset from './resetform';
import NavBar from './components/navbar';

import resetRequest from '../../events';
import {
  formData as Data,
  responseMessage as Message,
  setStatus,
} from '../../redux/actions/passwordreset';

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

  makeHref = (srv) => `https://${srv}`;

  handleSubmit = async (event) => {
    event.preventDefault();
    const { email } = this.state;
    const done = (
      <p>
        Your password has been successfully reset,
        {' '}
        <a href="/login">login?</a>
      </p>
    );
    const mailer = /gmail/.test(email)
      ? 'mail.google.com'
      : `${email.slice(email.indexOf('@'))}/login`;
    const link = (
      <a href={this.makeHref(mailer)} target="new">
        {email}
      </a>
    );
    const sent = (
      <p>
        A reset link has been sent to
        {' '}
        {link}
. Please check your inbox and follow
        instructions to reset your password
      </p>
    );
    this.onSendRequest(sent, done, resetRequest);
  };

  onSendRequest = async (sent, done, resetRequestHandler) => {
    const {
      history,
      responseMessage,
      location,
      summary,
      formData,
    } = this.props;
    const { email, password, confirmPassword } = this.state;
    const res = await resetRequestHandler(this);
    const json = await res.json();
    const msg = await json.message;
    const [type, detail] = !location.search
      ? ['emailSent', sent]
      : ['passwordReset', done];
    formData(email, password, confirmPassword);
    responseMessage(res.ok ? detail : msg);
    summary(type);
    if (res.ok) {
      history.push('/response');
    }
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { handleSubmit, handleChange } = this;
    const { location, message } = this.props;
    const { search } = location;
    const form = !search ? (
      <Request
        handleSubmit={handleSubmit}
        message={message}
        handleChange={handleChange}
        email=""
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
  message: state.responseMessage.message,
  email: state.formData.email,
  status: state.setStatus.status,
  formData: state.formData,
});
const dispatchProps = (dispatch) => ({
  responseMessage: (m) => dispatch(Message(m)),
  setStatus: (m) => dispatch(setStatus(m)),
  summary: (t) => dispatch({ type: t }),
  formData: (e, p, c) => dispatch(Data(e, p, c)),
});

ResetRequest.propTypes = {
  message: PropTypes.any,
  responseMessage: PropTypes.func,
  location: PropTypes.objectOf(PropTypes.any).isRequired,
  history: PropTypes.object.isRequired,
  formData: PropTypes.func,
  summary: PropTypes.func.isRequired,
};

ResetRequest.defaultProps = {
  responseMessage: '',
  formData: '',
  message: '',
};

export default connect(
  mapStateToProps,
  dispatchProps,
)(ResetRequest);
