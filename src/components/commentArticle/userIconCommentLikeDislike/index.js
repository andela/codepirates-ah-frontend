import React from 'react';
import PropTypes from 'prop-types';
import style from './userIconComponent.scss';
import userIcone from '../../../../public/assets/images/avatar.png';

const UserIconComponent = (
  {
    username,
    createAt,
    icon,
    comment,
    likePart,
  },
) => (
  <div className="listOfComments--userIconAndUsername" style={style}>
    <img src={icon || userIcone} alt="user icon" width="40px" height="40px" />
    <div className="listOfComments--userIconAndUsername__userNameAndCreateAt">
      <p className="username">{username}</p>
      <p className="createdAt">{createAt}</p>
      <p className="comment">{comment}</p>
      {likePart}
    </div>
  </div>
);

UserIconComponent.defaultProps = {
  username: '',
  createAt: '',
  icon: '',
  comment: '',
};

UserIconComponent.propTypes = {
  username: PropTypes.string,
  createAt: PropTypes.string,
  icon: PropTypes.string,
  comment: PropTypes.string,
};

export default UserIconComponent;
