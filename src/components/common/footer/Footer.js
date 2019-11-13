import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import style from './footer.scss';

library.add(fab);
/**
 * @description - FooterComponent
 * @param {object} props
 * @returns {JSX} - Footer JSX template
 */
const Footer = () => (
  <>
    <footer className="footer dark" style={style}>
      <hr className="divider" />
      <div className="text-center mb-4 blockquote">
        <span>&copy; 2018 Authors Haven.</span>
        <FontAwesomeIcon icon={['fab', 'facebook']} fixedWidth />
        <FontAwesomeIcon icon={['fab', 'twitter']} fixedWidth />
        <FontAwesomeIcon icon={['fab', 'linkedin']} fixedWidth />
      </div>
    </footer>
  </>
);
export default Footer;
