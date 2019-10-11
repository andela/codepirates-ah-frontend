import React from 'react';
import PropTypes from 'prop-types';
/**
 * @description - SocialButtons Component
 * @param {object} props
 * @returns {JSX} - Social Button JSX template
 */
const Button = (props) => (
  <>
    <div
      className={`${props.classes}`}
    >
      {props.children}
    </div>
  </>
);

Button.propTypes = {
  classes: PropTypes.string,
  children: PropTypes.string,
};

export default Button;
