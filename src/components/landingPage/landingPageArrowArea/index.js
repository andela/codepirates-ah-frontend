import React from 'react';
import style from './landingPageArrowArea.scss';

export default function landingPageArrowArea() {
  return (
    <div className="landingPageArrowArea" style={style}>
      <div className="landingPageArrowArea--textPart">
        <h2>To contribute, join us </h2>
      </div>
      <div>
        <a href="/signup">
          <div className="landingPageArrowArea--circleWithArrow">
            <i className="fas fa-arrow-right" />
          </div>
        </a>
      </div>
    </div>
  );
}
