import React from 'react';
import style from './landingPageLinks.scss';

export default function LandingPageLinks() {
  return (
    <div className="landingPageLinksDiv" style={style}>
      <div className="landingPageLinksDive--upperLine" />
      <div className="landingPageLinksDive--links">
        <a href="/privacy">privacy</a>
        <a href="/about">about</a>
        <a href="/security">security</a>
        <a href="/help">help</a>
      </div>
    </div>
  );
}
