import React from 'react';

const ProfileSideBar = ({ articles }) => (
  <div className="userProfile__actions">
    <div className="profile__action active--color">Bio</div>
    <div className="profile__action">
      My Blogs (
      {articles}
)
    </div>
    <div className="profile__action">Other Blogs</div>
  </div>
);

export default ProfileSideBar;
