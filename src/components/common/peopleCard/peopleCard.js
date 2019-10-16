import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { PropTypes } from 'prop-types';


const PeopleCard = ({ user }) => (
  <div className="add row">
    <div className="col-12 col-xs-12 col-md-10 col-lg-10 peopleCard">
      <div className="row">
        <div className="col-2 col-xs-2 col-md-1 col-lg-1">
          {!user.image && <FontAwesomeIcon className="peopleAvatar" icon={faUserCircle} />}
          {user.image && <img src="" alt="user profile" />}
        </div>
        <div className="col-10 col-xs-12 col-md-8 col-lg-8">
          <div className="row">
            <div className="col-12">
              <h4>{user.username}</h4>
            </div>
            <div className="col-12">
              {user.bio}
            </div>
          </div>
        </div>
        <div className="col-12 col-xs-12 col-md-2 col-lg-2">
          <button style={{ marginLeft: '5rem', marginTop: '2rem' }} type="button" className="ui positive basic button">Follow</button>
        </div>
      </div>
    </div>
  </div>
);

PeopleCard.propTypes = {
  user: PropTypes.object.isRequired,
};

export default PeopleCard;
