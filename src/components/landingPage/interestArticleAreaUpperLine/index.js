import React from 'react';
import style from './popularArticleAreaUpperLine.scss';

export default function InterestArticlesAreaUpperGreenLine() {
  return (
    <div className="PopularArticleAreaUpperGreenLine" style={style}>
      <div className="PopularArticleAreaUpperGreenLine--textAndSelector">
        <div className="PopularArticleAreaUpperGreenLine__textDiv">
          <h5>Recent articles </h5>
        </div>
        <div className="PopularArticleAreaUpperGreenLine__selectorDiv">
          <div>
            <p>show:</p>
          </div>
          <div className="PopularArticleAreaUpperGreenLine__select">
            <select>
              <option>Technology</option>
              <option>history</option>
              <option>science</option>
              <option>education</option>
            </select>
          </div>
        </div>
      </div>
      <div className="PopularArticleAreaUpperGreenLine--line">
        <div className="PopularArticleAreaUpperGreenLine__greenLine" />
      </div>
    </div>
  );
}
