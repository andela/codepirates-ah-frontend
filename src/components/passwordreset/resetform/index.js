import React from 'react';
import propTypes from 'prop-types';

import Input from '../components/input';
import Button from '../components/button';

/**
 * @description - Password reset form Component
 * @param {object} props
 * @returns {JSX} - Social Button JSX template
 */
const PasswordReset = ({ handleSubmit, message, handleChange }) => (
  <div className="body">
    <h2>Change Your Password</h2>
    <hr className="hr" />
    <p className="instruction">
               Enter and confirm your new password to reset
    </p>
    <form onSubmit={handleSubmit}>
      <Input name="password" handleChange={handleChange} label="New password" />
      <br />
      <div className="error">{message}</div>
      <Input name="confirmPassword" handleChange={handleChange} label="Confirm new password" />
      <br />
      <Button value="reset my password" />
    </form>
  </div>
);

const [handleSubmit, handleChange] = Array(2).fill(propTypes.func.isRequired);
const message = propTypes.any;

PasswordReset.propTypes = {
  handleSubmit,
  handleChange,
  message,
};

PasswordReset.defaultProps = {
  message: '',
  handleChange: null,
  handleSubmit: null,
};

export default PasswordReset;
