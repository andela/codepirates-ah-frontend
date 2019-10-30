import React from 'react';
import propTypes from 'prop-types';

import Input from '../../common/textInput';
import Button from '../../common/submitButton';

import '../resetrequest.scss';

/**
 * @description - Password reset request form Component
 * @param {object} props
 * @returns {JSX} - Social Button JSX template
 */
const ResetRequest = ({
  handleSubmit, error, handleChange, email,
}) => (
  <div className="body">
    <h2>Password Reset</h2>
    <hr className="hr" />
    <p className="instruction">
Enter the email address you used to register. We will send you
    an email that contains instructions on how to reset your
                        password
    </p>
    <form onSubmit={handleSubmit} id="form">
      <Input name="email" onChange={handleChange} value={email} label="Email" />
      <div className="error">{error}</div>
      <Button value="send" />
    </form>
  </div>
);
const [handleSubmit, handleChange] = Array(2).fill(propTypes.func.isRequired);
const [error, email] = Array(2).fill(propTypes.string);
ResetRequest.propTypes = {
  handleSubmit,
  handleChange,
  error,
  email,
};

ResetRequest.defaultProps = {
  error: '',
  email: '',
  handleChange: null,
  handleSubmit: null,
};

export default ResetRequest;
