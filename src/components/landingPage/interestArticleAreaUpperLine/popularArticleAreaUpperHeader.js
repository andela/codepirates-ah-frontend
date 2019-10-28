import React from 'react';
import style from './popularArticleAreaUpperLine.scss';

export default function PopularArticleAreaUpperLine() {
  return (
    <div className="PopularArticleAreaUpperGreenLine" style={style}>
      <div className="PopularArticleAreaUpperGreenLine--textAndSelector">
        <div className="PopularArticleAreaUpperGreenLine__textDiv">
          <h5>Popular articles</h5>
        </div>
        <div className="PopularArticleAreaUpperGreenLine__selectorDiv">
          <div>
            <p>This:</p>
          </div>
          <div className="PopularArticleAreaUpperGreenLine__select">
            <select>
              <option>week</option>
              <option>month</option>
            </select>
          </div>
        </div>
      </div>
      <div className="PopularArticleAreaUpperGreenLine--line" />
    </div>
  );
}
