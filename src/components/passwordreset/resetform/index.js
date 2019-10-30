import React from 'react';
import propTypes from 'prop-types';

import Input from '../../common/textInput';
import Button from '../../common/submitButton';

/**
 * @description - Password reset form Component
 * @param {object} props
 * @returns {JSX} - Social Button JSX template
 */
const PasswordReset = ({
  handleSubmit,
  error,
  handleChange,
  pass,
  confirm,
}) => (
  <div className="body">
    <h2>Change Your Password</h2>
    <hr className="hr" />
    <p className="instruction">Enter and confirm your new password to reset</p>
    <form onSubmit={handleSubmit}>
      <Input
        name="password"
        onChange={handleChange}
        label="New password"
        type="password"
        value={pass}
      />
      <br />
      <span className="error">{error}</span>
      <Input
        name="confirmPassword"
        onChange={handleChange}
        label="Confirm new password"
        type="password"
        value={confirm}
      />
      <br />
      <Button value="reset my password" />
    </form>
  </div>
);

const [handleSubmit, handleChange] = Array(2).fill(propTypes.func.isRequired);
const [pass, confirm] = Array(2).fill(propTypes.string);
const error = propTypes.any;

PasswordReset.propTypes = {
  handleSubmit,
  handleChange,
  error,
  pass,
  confirm,
};

PasswordReset.defaultProps = {
  error: '',
  handleChange: null,
  handleSubmit: null,
  pass: '',
  confirm: '',
};

export default PasswordReset;
