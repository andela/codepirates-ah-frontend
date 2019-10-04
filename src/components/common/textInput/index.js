import React from 'react';
import PropTypes from 'prop-types';
import commonStyle from '../common.scss';

export default function TextInput({
  name, label, value, onChange, type,
}) {
  return (
    <div className="field" style={{ commonStyle }}>
      <label htmlFor={name}>{label}</label>
      <input type={type} name={name} value={value} onChange={onChange} />
    </div>
  );
}
TextInput.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

TextInput.defaultProps = {
  name: '',
  label: '',
  value: '',
  type: '',
};
