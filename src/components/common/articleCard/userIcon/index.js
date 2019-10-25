import React from 'react';
import PropTypes from 'prop-types';
import userIcone from '../../../../../public/assets/images/userIcon.png';
import style from './userIcon.scss';

const UserIcon = ({
  readTime, userIcon, username, createdTime,
}) => (
  <div className="landingUserIconPartComponent" style={style}>
    <div className="landingUserIconPartComponent--icon">
      <img
        src={userIcon || userIcone}
        alt="user icon"
        width="40px"
        height="40px"
      />
    </div>
    <div className="landingUserIconPartComponent--usernameAndreadtime">
      <div className="landingUserIconPartComponent--username">{username}</div>
      <div className="landingUserIconPartComponent--pubAndReadTime">
        <div>
          <p>{createdTime}</p>
        </div>
        <div className="landingUserIconPartComponent--pubAndReadTime-and-dot">
          <p>
            .
            <span>{readTime}</span>
          </p>
        </div>
      </div>
    </div>
  </div>
);
UserIcon.propTypes = {
  readTime: PropTypes.string,
  userIcon: PropTypes.string,
  username: PropTypes.string,
  createdTime: PropTypes.string,
};
UserIcon.defaultProps = {
  readTime: '',
  userIcon: '',
  username: '',
  createdTime: '',
};
export default UserIcon;
