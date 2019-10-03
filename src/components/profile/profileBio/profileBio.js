import React from 'react';
import { PropTypes } from 'prop-types';

const ProfileBio = (props) => {
  const {
    onFormSubmit, onInputChange, bioData, bioEditMode, onUpdatingBio,
  } = props;
  return (
    <div className="">
      <div className="row"><div className="col-12"><h4>Bio</h4></div></div>
      <form className="bio__form" onSubmit={onFormSubmit}>
        {bioEditMode && (
          <div>
            <div className="row"><div className="col-12"><textarea onChange={onInputChange} name="bio" className="form-control" rows="3" value={bioData} placeholder="Share something about yourself here." /></div></div>
            <div className="row justify-content-end">
              <div className="col-3 bio__form--button"><button type="submit" onClick={onUpdatingBio} className="button button--secondary btn-cancel">Cancel</button></div>
              <div className="col-3 bio__form--button"><button type="submit" className="button button--primary">Save</button></div>
            </div>
          </div>
        )}
        {!bioEditMode && (
          <div>
            <div className="row"><div className="col-12 bio"><blockquote>{bioData}</blockquote></div></div>
            <div className="row justify-content-end"><div className="col-4 bio__form--button"><button type="submit" onClick={onUpdatingBio} className="button button--primary btn-update">Update</button></div></div>
          </div>
        )}
      </form>
    </div>
  );
};
ProfileBio.defaultProps = {
  bioData: PropTypes.string,
};

ProfileBio.propTypes = {
  onFormSubmit: PropTypes.func.isRequired,
  bioData: PropTypes.string,
  onInputChange: PropTypes.func.isRequired,
  bioEditMode: PropTypes.bool.isRequired,
  onUpdatingBio: PropTypes.func.isRequired,
};

export default ProfileBio;
