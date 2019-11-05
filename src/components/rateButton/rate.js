import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import {
  Popover, ButtonToolbar, Button,
} from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Popup } from 'semantic-ui-react';
import * as articleActions from '../../redux/actions/article/article';
import RatingArticleCardComponent from '../common/ratingComponent/index';
import Overlay from '../common/overlay/overlay';


export const RateComponent = (props) => {
  const {
    actions, author, user, slug,
  } = props;
  const { isLoggedIn, profile } = user;
  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);
  const ref = useRef(null);

  const handleClick = (event) => {
    if (!isLoggedIn) {
      props.history.push(
        {
          pathname: '/login',
          state: { from: props.location },
        },
      );
      return;
    }
    setShow(!show);
    setTarget(event.target);
  };
  const onChange = async (rating) => {
    await setShow(!show);
    await actions.postArticleRatings(slug, rating);
  };

  return (
    <>
      <ButtonToolbar ref={ref}>


        {profile.username === author
          ? (

            <Popup
              content="you cant rate your article"
              trigger={
                <div disabled className="l-icon"><i className="fas fa-star" /></div>
                }
            />
          )
          : (
            <div className="l-icon">
              <Button onClick={handleClick}><i className="fas fa-star" /></Button>
              {' '}
            </div>
          )}

        <Overlay
          show={show}
          target={target}
          container={ref.current}
        >
          <Popover.Content>
            <RatingArticleCardComponent onChange={onChange} readonly={false} />
          </Popover.Content>

        </Overlay>
      </ButtonToolbar>
    </>
  );
};
RateComponent.defaultProps = {
};
RateComponent.propTypes = {
  actions: PropTypes.object.isRequired,
  author: PropTypes.string.isRequired,
  user: PropTypes.object.isRequired,
  slug: PropTypes.string.isRequired,
};

export const mapStateToProps = (state) => (
  {
    user: state.user,
  }
);

export const mapDispatchToProps = (dispatch) => ({
  actions: {
    postArticleRatings: bindActionCreators(articleActions.postRatings, dispatch),
  },
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RateComponent));
