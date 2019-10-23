import React, { Component } from 'react';
import PropTypes from 'prop-types';
import userIcone from '../../../../../public/assets/images/userIcon.png';
import style from './userIcon.scss';

export default class UserIcon extends Component {
  render() {
    const {
      username, readtime, timeCreated,
    } = this.props;
    return (
      <div className="landingUserIconPartComponent" style={style}>
        <div className="landingUserIconPartComponent--icon">
          <img src={userIcone} alt="user icon" width="40px" height="40px" />
        </div>
        <div className="landingUserIconPartComponent--usernameAndreadtime">
          <div className="landingUserIconPartComponent--username">{username}</div>
          <div className="landingUserIconPartComponent--pubAndReadTime">
            <div>
              <p>
                {' '}
                <span>{timeCreated}</span>
              </p>
            </div>
            <div className="landingUserIconPartComponent--pubAndReadTime-and-dot">
              <p>
                .
                <span>{readtime}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

UserIcon.propTypes = {
  username: PropTypes.string,
  readtime: PropTypes.string,
  timeCreated: PropTypes.string,
};

UserIcon.defaultProps = {
  username: '',
  readtime: '',
  timeCreated: '',
};

