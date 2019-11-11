import React from 'react';
import PropTypes from 'prop-types';
import style from './LikeDislikeReplies.scss';

export default function LikeDislikeRepliesComponent({
  likes,
  dislikes,
  numberOfReply,
  isTextAreaVisible,
  setTextAreaVisible,
  isThreadAreaVisible,
  setThreadAreaVisible,
}) {
  return (
    <div className="listOfComments--likeDislikeAndButton" style={style}>
      <div className="listOfComments--likeDislikeAndButton__insideDiv">
        <i className="fas fa-thumbs-up" />
        <p>{likes}</p>
      </div>
      <div className="listOfComments--likeDislikeAndButton__insideDiv">
        <i className="fas fa-thumbs-down" />
        <p>{dislikes}</p>
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
  );
}

LikeDislikeRepliesComponent.propTypes = {
  dislikes: PropTypes.number,
  isTextAreaVisible: PropTypes.bool,
  isThreadAreaVisible: PropTypes.bool,
  setThreadAreaVisible: PropTypes.func,
  setTextAreaVisible: PropTypes.func,
  likes: PropTypes.number,
  numberOfReply: PropTypes.number,
};
LikeDislikeRepliesComponent.defaultProps = {
  dislikes: 0,
  likes: 0,
  isTextAreaVisible: false,
  isThreadAreaVisible: false,
  setThreadAreaVisible: () => {},
  setTextAreaVisible: () => {},
  numberOfReply: 0,
};
