import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import style from './commentCard.scss';
import UserIconComponent from '../userIconCommentLikeDislike';
import CommentTextArea from '../commentTextArea';
import LikeDislikeRepliesComponent from '../LikeUnlikeReplies';

export class CommentCard extends Component {
  state = {
    isTextAreaVisible: false,
    isThreadAreaVisible: false,
    numberLikes: 0,
  }

  setTextAreaVisible = () => {
    this.setState((prevState) => ({
      ...prevState,
      isTextAreaVisible: !this.state.isTextAreaVisible,
    }));
  };

  setThreadAreaVisible = () => {
    this.setState((prevState) => ({
      ...prevState,
      isThreadAreaVisible: !this.state.isThreadAreaVisible,
    }));
  };

  render() {
    const {
      message,
      comment,
      timeCreated,
      commentedUser,
      commenterProfileImage,
      username,
      image,
      commentId,
      childrenComments,
      slug,
    } = this.props;
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
                numberLikes={message && message.data ? message.data.likesCount : 'NO DATA'}
                commentId={commentId}
                numberOfReply={threadsNumber}
                isTextAreaVisible={this.state.isTextAreaVisible}
                setTextAreaVisible={this.setTextAreaVisible}
                isThreadAreaVisible={this.state.isThreadAreaVisible}
                setThreadAreaVisible={this.setThreadAreaVisible}
              />
)}
          />
          {this.state.isTextAreaVisible ? (
            <div className="divToDisplayOnClick" style={{ minHeight: '80px' }}>
              <CommentTextArea
                commentId={commentId}
                slug={slug}
              />
            </div>
          ) : null}
          {this.state.isThreadAreaVisible && childrenComments
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
}

CommentCard.propTypes = {
  username: PropTypes.string,
  image: PropTypes.string,
  comment: PropTypes.string,
  timeCreated: PropTypes.string,
  commenterProfileImage: PropTypes.string,
  commentedUser: PropTypes.string,
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
  childrenComments: [],
  commentId: null,
};

const mapStateToProps = ({ user: { username, image } }) => ({
  username,
  image,
});

export default connect(
  mapStateToProps,
)(CommentCard);
