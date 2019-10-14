import React from 'react';
import PropTypes from 'prop-types';
import commonStyle from '../common.scss';

export default function TextInput({
  name, label, value, onChange, type, error,
}) {
  const styling = {
    background: '#fff6f6',
    borderColor: '#e0b4b4',
    color: '#9f3a38',
  };
  const inputError = error.toLowerCase().search(name.toLowerCase()) >= 0;
  return (
    <div className="field" style={{ commonStyle }}>
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        style={error && inputError ? styling : {}}
        name={name}
        value={value}
        onChange={onChange}
      />
      <div>
        <p style={{ color: '#9f3a38' }}>{inputError ? error : ''}</p>
      </div>
    </div>
  );
}

TextInput.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  error: PropTypes.string,
  value: PropTypes.string,
  type: PropTypes.string,
  onChange: PropTypes.func.isRequired,

};
TextInput.defaultProps = {
  name: '',
  label: '',
  value: '',
  type: '',
  error: '',
};
