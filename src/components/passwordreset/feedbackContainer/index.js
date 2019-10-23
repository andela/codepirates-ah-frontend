import { connect } from 'react-redux';
import React from 'react';
import PropTypes from 'prop-types';

import Feed from './feedback';
// import Footer from '../footer';
// import Header from '../header';
import NavBar from '../components/navbar';

const mapStateToProps = (state) => ({
  message: state.passwordReset.message,
  title: state.passwordReset.title,
});

/**
 * @description - Feedback page container Component
 * @param {object} props
 * @returns {JSX} - Social Button JSX template
 */
const FeedBack = ({ message, title }) => (
  <div className="container, styles">
    <NavBar />
    <Feed message={message} title={title} />
  </div>
);

FeedBack.propTypes = {
  message: PropTypes.any.isRequired,
  title: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(FeedBack);
