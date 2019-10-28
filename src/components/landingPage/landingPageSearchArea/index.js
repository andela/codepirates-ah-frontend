import React from 'react';
import style from './landingPageSearchArea.scss';

export default function LandingPageSearchArea() {
  return (
    <div className="landingPageSearch" style={style}>
      <div className="landingPageSearch--select">
        <select>
          <option>choose option</option>
          <option>author</option>
          <option>keyword</option>
          <option>tags</option>
          <option>title</option>
        </select>
      </div>
      <div className="landingPageSearch--searchButton">
        <input type="text" placeholder="what are you searching for ?" />
        <i className="fas fa-search" />
      </div>
    </div>
  );
}
