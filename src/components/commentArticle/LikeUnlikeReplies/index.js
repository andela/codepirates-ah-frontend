import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import { Popup } from 'semantic-ui-react';
import style from './LikeDislikeReplies.scss';
import likeAction from '../../../redux/actions/commentArticle/likeComment';
import fetchLikes from '../../../redux/actions/commentArticle/likeComment/fetchAllLikes';

export class LikeDislikeRepliesComponent extends Component {
state = {
  likesCount: 0,
  peopleWhoLiked: '',
  actionMethod: 'POST',
};

componentDidMount() {
  const { fetchLikes, commentId } = this.props;
  fetchLikes(commentId);
}

  UNSAFE_componentWillReceiveProps = (nextProps) => {
    const { counts, commentId } = nextProps;
    (counts || []).forEach((count) => {
      if (Number(count.commentId) === Number(commentId)) {
        this.setState((prevState) => ({ ...prevState, likesCount: count.likesCount }));
        this.setState((prevState) => ({ ...prevState, peopleWhoLiked: count.formattedLikeInfo }));
      }
    });
  };

  handleClick = (isLikedByMe, likesCount) => {
    const { history, location } = this.props;
    if (!localStorage.getItem('token')) {
      history.push(
        {
          pathname: '/login',
          state: { from: location },
        },
      );
      return;
    }
    const {
      commentId, likeAction,
    } = this.props;
    const method = isLikedByMe ? 'PUT' : 'POST';
    likeAction(commentId, method)
      .then((res) => {
        if (res.payload.status === 'success') {
          this.setState((prevState) => ({
            ...prevState,
            likesCount: isLikedByMe
              ? likesCount - 1
              : likesCount + 1,
            peopleWhoLiked: isLikedByMe
              ? prevState.peopleWhoLiked.toLowerCase().replace('you', '').replace(',', '')
              : `You, ${prevState.peopleWhoLiked.toLowerCase().replace('you', '')}`,
          }));
        }
        this.setState((prevState) => ({ ...prevState, likesCount: prevState.likesCount }));
      });
  }

  render() {
    const {
      numberOfReply,
      isTextAreaVisible,
      setTextAreaVisible,
      isThreadAreaVisible,
      setThreadAreaVisible,
    } = this.props;
    const { likesCount, peopleWhoLiked } = this.state;
    const isLikedByMe = !!peopleWhoLiked.toLowerCase().includes('you');
    return (
      <div>
        <div className="listOfComments--likeDislikeAndButton" style={style}>
          <ToastContainer position={toast.POSITION.TOP_RIGHT} />
          <div className="listOfComments--likeDislikeAndButton__insideDiv">
            <Popup
              content={isLikedByMe ? 'Unlike' : 'Like'}
              trigger={
                <i className="fas fa-thumbs-up" onClick={() => this.handleClick(isLikedByMe, likesCount)} />
            }
            />
            <p>{likesCount}</p>
          </div>
          <div className="listOfComments--likeDislikeAndButton__insideDiv">
            <button id="button1" type="button" onClick={() => setTextAreaVisible(!isTextAreaVisible)}>
            reply
            </button>
          </div>
          <div className="listOfComments--likeDislikeAndButton__insideDiv">
            <button id="button2" type="button" onClick={() => setThreadAreaVisible(!isThreadAreaVisible)}>
              {numberOfReply}
              {' '}
              {numberOfReply < 2 ? 'reply' : 'replies'}
            </button>
          </div>
        </div>
        <div>
          <p style={{ color: 'gray', fontSize: '10px' }}>{peopleWhoLiked}</p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ likes: { counts } }) => ({
  counts,
});
LikeDislikeRepliesComponent.propTypes = {
  isTextAreaVisible: PropTypes.bool,
  isThreadAreaVisible: PropTypes.bool,
  setThreadAreaVisible: PropTypes.func,
  setTextAreaVisible: PropTypes.func,
  likeAction: PropTypes.func,
  fetchLikes: PropTypes.func.isRequired,
  numberOfReply: PropTypes.number,
};
LikeDislikeRepliesComponent.defaultProps = {
  isTextAreaVisible: false,
  isThreadAreaVisible: false,
  setThreadAreaVisible: () => {},
  setTextAreaVisible: () => {},
  numberOfReply: 0,
  likeAction: () => {},
};

export default withRouter(connect(mapStateToProps,
  { likeAction, fetchLikes })(LikeDislikeRepliesComponent));
