import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '../common/button/Button';
// import Footer from '../footer/Footer';
// import NavBar from '../navbar/navbar';


const SocialButtons = () => {
  const { BACKEND_URL } = process.env;
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
    <div className="mb-4 social-btn">
      <a href={`${BACKEND_URL}/login/${socialIcon.icon}`} key={socialIcon.key} className="social-btn mb-4" target="blank">
        <Button
          classes={socialIcon.className}
        >
          <FontAwesomeIcon icon={['fab', `${socialIcon.icon}`]} />
          {' '}
Sign in with
          {' '}
          <b>{socialIcon.key}</b>

        </Button>
      </a>
    </div>

  ));

  return (
    <>

      {/* <NavBar isLogedin="true" /> */}
      <div className="text-center social-btn">
        {socialMediaLogin}
      </div>
      {/* <Footer /> */}

    </>
  );
};

export default SocialButtons;
