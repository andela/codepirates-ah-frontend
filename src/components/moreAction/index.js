import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import {
  Popover, ButtonToolbar,
} from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { deleteArticle } from '../../redux/actions/article/article';
import Model from '../common/model/model';
import Overlay from '../common/overlay/overlay';


export const MoreOnArticle = (props) => {
  const [show, setShow] = useState(false);
  const [shows, setShows] = useState(false);
  const [target, setTarget] = useState(null);
  const ref = useRef(null);
  const {
    actions, author, user, slug,
  } = props;
  const { isLoggedIn, profile } = user;

  const handleClick = (event) => {
    setShow(!show);
    setTarget(event.target);
  };
  const handleConfirmed = () => {
    setShows(!shows);
    actions.deleteArticle(slug);
  };
  const handleShows = () => {
    if (!isLoggedIn) {
      props.history.push(
        {
          pathname: '/login',
          state: { from: props.location },
        },
      );
      return;
    }
    setShows(!shows);
  };

  return (
    <>
      <ButtonToolbar ref={ref}>
        <div onClick={handleClick}><i className="fas fa-ellipsis-v" /></div>
        <Overlay
          show={show}
          target={target}
          container={ref.current}
        >
          {(author === profile.username)
            ? (
              <>
                <Popover.Title style={{ cursor: 'pointer' }} onClick={handleShows} className="deleting"> Delete</Popover.Title>
                <Popover.Title
                  style={{ cursor: 'pointer' }}
                  onClick={() => {
                    window.location.replace(`${window.location.href}/update`);
                  }}
                >
                 Edit
                  {' '}

                </Popover.Title>
                {' '}

              </>
            )
            : (<Popover.Title style={{ cursor: 'pointer' }} as="a">Report</Popover.Title>)}
        </Overlay>
      </ButtonToolbar>
      <Model show={shows} handleConfirmed={handleConfirmed} handleClose={handleShows} modelHeading="deleting article">
        {' '}
        <p>are you sure you want to delete this article</p>
      </Model>
    </>
  );
};
MoreOnArticle.propTypes = {
  actions: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  author: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
};
export const mapStateToProps = (state) => (
  {
    user: state.user,
  }
);
export const mapDispatchToProps = (dispatch) => ({
  actions: {
    deleteArticle: bindActionCreators(deleteArticle, dispatch),
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(MoreOnArticle);



