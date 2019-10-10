import React from 'react';
import PropTypes from 'prop-types';

import tick from '../../../../public/assets/images/tick.png';

import './feedback.scss';

/**
 * @description - Feedback page Component
 * @param {object} props
 * @returns {JSX} - Social Button JSX template
 */
const Feedback = ({ summary, message }) => (
  <div className="body">
    <img className="tick" src={tick} alt="success" />
    <div className="pageheading"><p>{summary}</p></div>
    <hr />
    <div className="message">{message}</div>
  </div>
);

Feedback.propTypes = {
  message: PropTypes.any.isRequired,
  summary: PropTypes.string.isRequired,
};

export default Feedback;
