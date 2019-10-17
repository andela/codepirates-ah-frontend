import React from 'react';
import PropTypes from 'prop-types';
/**
 * @description - SocialButtons Component
 * @param {object} props
 * @returns {JSX} - Social Button JSX template
 */
const Button = ({ classes, children }) => (
  <>
    <div
      className={`${classes}`}
    >
      {children}
    </div>
  </>
);
Button.defaultProps = {
  classes: PropTypes.string,
  children: PropTypes.array,
};
Button.propTypes = {
  classes: PropTypes.string,
  children: PropTypes.array,
};

export default Button;
