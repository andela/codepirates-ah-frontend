import React from 'react';
import PropTypes from 'prop-types';
import commonStyle from './common.scss';


export default function SubmitButton({ name, label, value }) {
  return (
    <div className="submit-div" style={{ commonStyle }}>
      <label htmlFor={name}>{label}</label>
      <input type="submit" value={value} className="submit-btn" />
    </div>
  );
}


SubmitButton.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,

};
SubmitButton.defaultProps = {
  name: '',
  label: '',
  value: '',
};
