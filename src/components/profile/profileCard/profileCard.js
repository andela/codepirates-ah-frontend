import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faUpload } from '@fortawesome/free-solid-svg-icons';
import './profileCard.scss';

function showFollowers() {
  return (
    <span className="row user-follow">
      <div className="col-6 col-md-6 followers">
        <p>0</p>
        <p>Followers</p>
      </div>
      <div className="col-6 col-md-6 following">
        <p>0</p>
        <p>Following</p>
      </div>
    </span>
  );
}

function editProfileCardView(
  image,
  previewImage,
  onInputChange,
  username,
  onEditModeChange,
) {
  return (
    <div>
      <div className="row">
        {image && (
          <div className="avatarUpload">
            <div className="avatar-preview">
              <div
                id="imagePreview"
                ref={previewImage}
                style={{ backgroundImage: `url(${image})` }}
              />
            </div>
          </div>
        )}
        {!image && (
          <span className="user-avatar">
            <FontAwesomeIcon icon={faUserCircle} />
          </span>
        )}
      </div>
      <div>
        <div className="avatar-edit">
          <label htmlFor="profileImage">
            <input
              type="file"
              onChange={onInputChange}
              name="image"
              id="profileImage"
              className="fileInput"
              accept=".png, .jpg, .jpeg"
            />
            <FontAwesomeIcon icon={faUpload} />
            Upload Profile
          </label>
        </div>
      </div>
      <span className="user-name">
        <h6>
          <input
            onChange={onInputChange}
            type="text"
            name="username"
            value={username}
            className="form-control username-input"
          />
        </h6>
      </span>
      {showFollowers()}
      <span className="row">
        <div className="col-6 col-md-6">
          <button
            onClick={onEditModeChange}
            type="submit"
            className="button button--primary button--large btn-cancel-edit-card"
          >
            Cancel
          </button>
        </div>
        <div className="col-6 col-md-6">
          <button
            type="submit"
            className="button button--secondary button--large"
          >
            Save
          </button>
        </div>
      </span>
    </div>
  );
}

function isNotInProfileCardEditMode(image, username, onEditModeChange,
  optInAppStatus, optInEmailStatus, handleInAppNotifications, handleEmailNotifications) {
  return (
    <div>
      <div className="row">
        {image && (
          <div className="avatarUpload">
            <div className="avatar-preview">
              <div
                id="imagePreview"
                style={{ backgroundImage: `url(${image})` }}
              />
            </div>
          </div>
        )}
        {!image && (
          <span className="user-avatar">
            <FontAwesomeIcon icon={faUserCircle} />
          </span>
        )}
      </div>
      <span className="user-name">
        <h6>{username}</h6>
      </span>
      {showFollowers()}
      <span className="row profileActionBtns">
        <div className="col-12 col-md-12">
          <button
            onClick={onEditModeChange}
            type="submit"
            className="button button--primary button--large btn-edit"
          >
            Edit
          </button>
        </div>
        <div className="col-12 col-md-12">
          <a href="/articles/create">
            <p className="button button--primary button--large btn-edit">
              Create article
            </p>
          </a>
        </div>
        <div className="col-12 col-md-12">
          <a href="/bookmarks">
            <p className="button button--primary button--large btn-edit">
              My Bookmarks
            </p>
          </a>
        </div>
        <div className="col-12 col-md-12" style={{ cursor: 'pointer' }}>
          <p className="button button--primary button--large btn-edit" onClick={handleInAppNotifications}>
            {optInAppStatus ? 'Opt Out For in-App Notifications' : 'Opt In For in-App Notifications'}
          </p>
        </div>
        <div className="col-12 col-md-12" style={{ cursor: 'pointer' }}>
          <p className="button button--primary button--large btn-edit" onClick={handleEmailNotifications}>
            {optInEmailStatus === true ? 'Opt Out For email Notifications' : 'Opt In For email Notifications'}
          </p>
        </div>
      </span>
    </div>
  );
}

const ProfileCard = (props) => {
  const {
    onFormSubmit,
    image,
    onInputChange,
    profileCardEditMode,
    onEditModeChange,
    username,
    previewImage,
    handleInAppNotifications,
    optInAppStatus,
    optInEmailStatus,
    handleEmailNotifications,
  } = props;
  return (
    <div className="text-center user-profile-card">
      <form className="profileCardForm" onSubmit={onFormSubmit}>
        {profileCardEditMode
          && editProfileCardView(
            image,
            previewImage,
            onInputChange,
            username,
            onEditModeChange,
          )}
        {!profileCardEditMode
          && isNotInProfileCardEditMode(image, username,
            onEditModeChange, optInAppStatus, optInEmailStatus,
            handleInAppNotifications, handleEmailNotifications)}
      </form>
    </div>
  );
};

ProfileCard.defaultProps = {
  image: null,
  username: null,
  previewImage: null,
};

ProfileCard.propTypes = {
  onFormSubmit: PropTypes.func.isRequired,
  image: PropTypes.string || PropTypes.object,
  username: PropTypes.string,
  onInputChange: PropTypes.func.isRequired,
  profileCardEditMode: PropTypes.bool.isRequired,
  onEditModeChange: PropTypes.func.isRequired,
  previewImage: PropTypes.object,
};

export default ProfileCard;
