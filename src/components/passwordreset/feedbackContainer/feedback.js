import React from 'react';
import PropTypes from 'prop-types';
import { ToastContainer, toast } from 'react-toastify';

import tick from '../../../../public/assets/images/tick.png';

import './feedback.scss';

/**
 * @description - Feedback page Component
 * @param {object} props
 * @returns {JSX} - Social Button JSX template
 */
const Feedback = ({ title, message }) => (
  <div className="body">
    <ToastContainer position={toast.POSITION.TOP_RIGHT} />
    <img className="tick" src={tick} alt="success" />
    <div className="pageheading"><p>{title}</p></div>
    <hr />
    <div className="message">{message}</div>
  </div>
);

Feedback.propTypes = {
  message: PropTypes.any.isRequired,
  title: PropTypes.string.isRequired,
};

export default Feedback;
