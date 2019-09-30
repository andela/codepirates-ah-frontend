import React from 'react';
import commonStyle from '../common.scss';

export default function OrLine() {
  return (
    <div className="or-div" style={commonStyle}>
      <div className="line line-one" />
      <div className="or"><p id="or">or</p></div>
      <div className="line line-two" />
    </div>
  );
}
