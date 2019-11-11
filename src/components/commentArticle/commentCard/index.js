import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import style from './commentCard.scss';
import UserIconComponent from '../userIconCommentLikeDislike';
import CommentTextArea from '../commentTextArea';
import LikeDislikeRepliesComponent from '../LikeDislikeReplies';

export function CommentCard({
  likes,
  dislikes,
  comment,
  timeCreated,
  commentedUser,
  commenterProfileImage,
  username,
  image,
  commentId,
  childrenComments,
  slug,
}) {
  const [isTextAreaVisible, setTextAreaVisible] = useState(false);
  const [isThreadAreaVisible, setThreadAreaVisible] = useState(false);
  const threadsNumber = childrenComments.length;
  return (
    <div style={style}>
      <div className="commentCard">
        <UserIconComponent
          username={commentedUser || username}
          createAt={timeCreated}
          icon={commenterProfileImage || image}
          comment={comment}
          likePart={(
            <LikeDislikeRepliesComponent
              likes={likes}
              dislikes={dislikes}
              numberOfReply={threadsNumber}
              isTextAreaVisible={isTextAreaVisible}
              setTextAreaVisible={setTextAreaVisible}
              isThreadAreaVisible={isThreadAreaVisible}
              setThreadAreaVisible={setThreadAreaVisible}
            />
)}
        />
        {isTextAreaVisible ? (
          <div className="divToDisplayOnClick" style={{ minHeight: '80px' }}>
            <CommentTextArea
              commentId={commentId}
              slug={slug}
            />
          </div>
        ) : null}
        {isThreadAreaVisible && childrenComments
          ? childrenComments.map((thread) => (
            <div className="divToDisplayOnClick">
              <UserIconComponent
                key={thread.id}
                username={thread.username || username}
                createAt={thread.timeCreated}
                icon={thread.userImage || image}
                comment={thread.body}
              />
            </div>
          ))
          : null}
      </div>
    </div>
  );
}

CommentCard.propTypes = {
  username: PropTypes.string,
  image: PropTypes.string,
  comment: PropTypes.string,
  timeCreated: PropTypes.string,
  commenterProfileImage: PropTypes.string,
  commentedUser: PropTypes.string,
  dislikes: PropTypes.number,
  likes: PropTypes.number,
  commentId: PropTypes.number,
  childrenComments: PropTypes.array,
};
CommentCard.defaultProps = {
  image: '',
  username: '',
  comment: '',
  timeCreated: 'less than a minute',
  commentedUser: null,
  commenterProfileImage: '',
  dislikes: '',
  likes: '',
  childrenComments: [],
  commentId: null,
};

const mapStateToProps = ({ user: { username, image } }) => ({
  username,
  image,
});

export default connect(
  mapStateToProps,
  null,
)(CommentCard);
