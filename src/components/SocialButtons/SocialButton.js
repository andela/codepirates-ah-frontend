import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import Button from '../common/button/Button';
import * as actionsTypes from '../../redux/actions/actionTypes';
import commonStyle from '../common/common.scss';


const SocialButtons = ({ status }) => {
  const { BACKEND_URL } = actionsTypes;
  const socialMediaLogin = [
    {
      className: 'btn button--facebook ',
      key: 'facebook',
      icon: 'facebook-square',
      url: `${BACKEND_URL}/login/facebook`,

    },
    {
      className: 'btn button--twitter',
      key: 'twitter',
      icon: 'twitter-square',
      url: `${BACKEND_URL}/login/twitter`,
    },

    {
      className: 'btn button--google',
      key: 'google',
      icon: 'google',
      url: `${BACKEND_URL}/login/google`,
    },
  ].map((socialIcon) => (
    <div className=" social-btn text-center  " key={socialIcon.key}>
      <a href={`${BACKEND_URL}/login/${socialIcon.key}`} className="button " target="blank">
        <Button
          style={commonStyle}
          classes={socialIcon.className}
        >
          <FontAwesomeIcon style={{ color: 'white' }} icon={['fab', `${socialIcon.icon}`]} className="icon" />
          {' '}
          {status}
          {' '}
          <b>{socialIcon.key}</b>

        </Button>
      </a>
    </div>

  ));

  return (
    <>
      {socialMediaLogin}

    </>
  );
};
SocialButtons.defaultProps = {
  status: PropTypes.string,
};
SocialButtons.propTypes = {
  status: PropTypes.string,
};

export default SocialButtons;
