import React from 'react';
import PropTypes from 'prop-types';

import tick from '../../../../public/assets/images/tick.png';

/**
 * @description - Feedback page Component
 * @param {object} props
 * @returns {JSX} - Social Button JSX template
 */
const Feedback = ({ subject, message }) => (
  <div className="body">
    <img className="tick" src={tick} alt="success" />
    <h2>{subject}</h2>
    <hr className="hr" />
    <p>{message}</p>
  </div>
);

Feedback.propTypes = {
  message: PropTypes.any.isRequired,
  subject: PropTypes.string.isRequired,
};

export default Feedback;
