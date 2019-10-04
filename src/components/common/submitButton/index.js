import React from 'react';
import PropTypes from 'prop-types';
import commonStyle from '../common.scss';

export default function SubmitButton(props) {
  const { value } = props;
  return (
    <div className="submit-div" style={{ commonStyle }}>
      <input type="submit" value={value} className="submit-btn" />
    </div>
  );
}

SubmitButton.propTypes = {
  value: PropTypes.string.isRequired,
};
