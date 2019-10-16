import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '../common/button/Button';
import * as actionsTypes from '../../redux/actions/actionTypes';


const SocialButtons = () => {
  const BACKEND_URL = actionsTypes.BASE_URL;
  const socialMediaLogin = [{
    className: 'btn btn-danger btn-block',
    key: 'google',
    icon: 'google',
    url: `${BACKEND_URL}/login/google`,
  },
  {
    className: 'btn btn-primary btn-block',
    key: 'facebook',
    icon: 'facebook',
    url: `${BACKEND_URL}/login/facebook`,

  },
  {
    className: 'btn btn-info btn-block',
    key: 'twitter',
    icon: 'twitter',
    url: `${BACKEND_URL}/login/twitter`,
  },
  ].map((socialIcon) => (
    <div className="mb-4 social-btn" key={socialIcon.key}>
      <a href={`${BACKEND_URL}/login/${socialIcon.icon}`} className="social-btn mb-6" target="blank">
        <Button
          classes={socialIcon.className}
        >
          <FontAwesomeIcon icon={['fab', `${socialIcon.icon}`]} />
          {' '}
Continue with
          {' '}
          <b>{socialIcon.key}</b>

        </Button>
      </a>
    </div>

  ));

  return (
    <>
      <div className="text-center social-btn">
        {socialMediaLogin}
      </div>

    </>
  );
};

export default SocialButtons;
