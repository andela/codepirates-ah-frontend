import React from 'react';
import propTypes from 'prop-types';

/**
 * @description - Form input element Component
 * @param {object} props
 * @returns {JSX} - Form minput JSX template
 */
const Input = ({
  name, handleChange, label, type,
}) => (
  <label htmlFor={name}>
    {label || name.charAt(0).toUpperCase() + name.slice(1)}
    <br />
    <input name={name} onChange={handleChange} type={type} required />
  </label>
);

Input.propTypes = {
  name: propTypes.string.isRequired,
  label: propTypes.string,
  type: propTypes.string,
  handleChange: propTypes.func.isRequired,
};

Input.defaultProps = {
  label: '',
  type: 'password',
};

export default Input;
