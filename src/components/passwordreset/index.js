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
  // formData as Data,
  // responseMessage as Message,
  // setStatus,
  resetRequest,
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

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.resetRequest(this.props, this.state);
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
  message: state.passwordReset.message,
  email: state.passwordReset.email,
  status: state.passwordReset.status,
});

ResetRequest.propTypes = {
  resetRequest: PropTypes.func.isRequired,
  message: PropTypes.any,
  location: PropTypes.objectOf(PropTypes.any),
};

ResetRequest.defaultProps = {
  message: '',
  location: {
    search: '',
    pathname: '/reset',
  },
};

export default connect(
  mapStateToProps,
  { resetRequest },
)(ResetRequest);
