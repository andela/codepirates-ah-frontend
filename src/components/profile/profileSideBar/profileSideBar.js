import React from 'react';

const ProfileSideBar = ({ onChangeTab, currentTab }) => (
  <div className="userProfile__actions">
    <div onClick={() => onChangeTab('bio')} className={`profile__action bio${currentTab === 'bio' ? ' active--color' : ''}`}>Bio</div>
    <div onClick={() => onChangeTab('my blogs')} className={`profile__action blogs${currentTab === 'my blogs' ? ' active--color' : ''}`}>
My Blogs
    </div>
    <div onClick={() => onChangeTab('report')} className={`profile__action reports${currentTab === 'report' ? ' active--color' : ''}`}>Reported articles</div>
  </div>
);

export default ProfileSideBar;
