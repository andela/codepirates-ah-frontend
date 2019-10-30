import { connect } from 'react-redux';
import React from 'react';
import PropTypes from 'prop-types';

import Feed from './feedback';

/**
 * @description - Feedback page container Component
 * @param {object} props
 * @returns {JSX} - Social Button JSX template
 */
const FeedBack = ({ message, subject }) => (
  <div className="container, styles">
    <Feed message={message} subject={subject} />
  </div>
);

FeedBack.propTypes = {
  message: PropTypes.any.isRequired,
  subject: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  message: state.passwordReset.success.message,
  subject: state.passwordReset.success.subject,
});

export default connect(mapStateToProps)(FeedBack);
