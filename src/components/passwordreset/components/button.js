import React from 'react';
import PropTypes from 'prop-types';

/**
 * @description - Button Component
 * @param {object} props
 * @returns {JSX} - Button JSX template
 */
const Button = ({ value }) => (
  <button id="req-btn" type="submit">
    {value}
  </button>
);

Button.propTypes = {
  value: PropTypes.string.isRequired,
};

export default Button;
