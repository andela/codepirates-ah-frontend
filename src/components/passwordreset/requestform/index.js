import React from 'react';
import propTypes from 'prop-types';

import Input from '../components/input';
import Button from '../components/button';

import './resetrequest.scss';

/**
 * @description - Password reset request form Component
 * @param {object} props
 * @returns {JSX} - Social Button JSX template
 */
const ResetRequest = ({
  handleSubmit, message, handleChange, email,
}) => (
  <div className="body">
    <h2>Password reset</h2>
    <hr className="hr" />
    <p className="instruction">
Enter the email address you used to register. We will send you
    an email that contains instructions on how to reset your
                        password
    </p>
    <form onSubmit={handleSubmit} id="form">
      <Input name="email" handleChange={handleChange} type="email" defaultValue={email} />
      <div className="error">{message}</div>
      <Button value="send" />
    </form>
  </div>
);

ResetRequest.propTypes = {
  handleSubmit: propTypes.func.isRequired,
  handleChange: propTypes.func.isRequired,
  message: propTypes.any,
  email: propTypes.string,
};

ResetRequest.defaultProps = {
  message: '',
  email: '',
};

export default ResetRequest;
