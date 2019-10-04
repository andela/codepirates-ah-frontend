import React from 'react';
import PropTypes from 'prop-types';
import commonStyle from '../common.scss';

export default function SwitchToSignupOrLogin(
  { message, url, filePath },
) {
  return (
    <div className="msg-svg" style={{ commonStyle }}>
      <div className="msg-svg__message">
        <p>{message}</p>
      </div>
      <div className="msg-svg__Login-svg">
        <a href={url}>
          <img src={filePath} alt="Authors haven logo" style={{ height: '120px', width: '120px' }} />
        </a>
      </div>
    </div>
  );
}

SwitchToSignupOrLogin.propTypes = {
  message: PropTypes.string,
  url: PropTypes.string,
  filePath: PropTypes.string,
};
SwitchToSignupOrLogin.defaultProps = {
  message: '',
  url: '',
  filePath: '',
};
