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

PasswordReset.propTypes = {
  handleSubmit: propTypes.func.isRequired,
  handleChange: propTypes.func.isRequired,
  message: propTypes.any,
};

PasswordReset.defaultProps = {
  message: '',
};

export default PasswordReset;
