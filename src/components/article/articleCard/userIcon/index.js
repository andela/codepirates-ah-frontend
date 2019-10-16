import React, { Component } from 'react';
import userIcone from '../../../../../public/assets/images/userIcon.png';
import style from './userIcon.scss';

export default class UserIcon extends Component {
  render() {
    return (
      <div className="landingUserIconPartComponent" style={style}>
        <div className="landingUserIconPartComponent--icon">
          <img src={userIcone} alt="user icon" width="40px" height="40px" />
        </div>
        <div className="landingUserIconPartComponent--usernameAndreadtime">
          <div className="landingUserIconPartComponent--username">username</div>
          <div className="landingUserIconPartComponent--pubAndReadTime">
            <div>
              <p>
                {' '}
                <span>2</span>
                {' '}
                  hours ago
              </p>
            </div>
            <div className="landingUserIconPartComponent--pubAndReadTime-and-dot">
              <p>
                .
                <span>1 min read</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
