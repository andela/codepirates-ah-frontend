import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import {
  Popover, ButtonToolbar,
} from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { deleteArticle, reportArticle } from '../../redux/actions/article/article';

import Model from '../common/model/model';
import Overlay from '../common/overlay/overlay';


export const MoreOnArticle = (props) => {
  const [show, setShow] = useState(false);
  const [shows, setShows] = useState(false);
  const [target, setTarget] = useState(null);
  const [report, setReport] = useState(false);
  const [reportMessage, setReportMessage] = useState('');
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

  const handleDisplayReport = () => {
    setReport(!report);
  };

  const handleCancelReport = () => {
    setReport(!report);
  };

  const handleReport = () => {
    setReport(!report);
    actions.reportArticle(slug, reportMessage);
  };

  const handleReportMessageOnChange = async (e) => {
    const { value } = e.target;
    setReportMessage(value);
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
                </Popover.Title>

              </>
            )
            : (<Popover.Title className="report" onClick={handleDisplayReport} style={{ cursor: 'pointer' }} as="a">Report</Popover.Title>)}
        </Overlay>
      </ButtonToolbar>
      <Model show={shows} handleConfirmed={handleConfirmed} handleClose={handleShows} modelHeading="deleting article">
        {' '}
        <p>are you sure you want to delete this article</p>
      </Model>
      <Model show={report} handleConfirmed={handleReport} handleClose={handleCancelReport} modelHeading="Report this article">
        <div className="row">
          <div className="col-md-12">
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <label className="input-group-text" htmlFor="inputGroupSelect01">Choose Reason</label>
              </div>
              <select value={reportMessage} onChange={handleReportMessageOnChange} className="custom-select" id="inputGroupSelect01">
                <option selected>Choose...</option>
                <option value="Rules Violation">Rules Violation</option>
                <option value="Spam">Spam</option>
                <option value="Harassment">Harassment</option>
              </select>
            </div>
          </div>
        </div>
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
    reportArticle: bindActionCreators(reportArticle, dispatch),
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(MoreOnArticle);



