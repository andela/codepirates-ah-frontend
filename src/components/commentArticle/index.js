import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';
import uuid from 'uuid/v4';
import style from './commentArticle.scss';
import CommentCard from './commentCard';
import CommentTextArea from './commentTextArea';
import fetchArticleCommentsAction from '../../redux/actions/commentArticle/fetchAllComments';
import * as actionTypes from '../../redux/actions/actionTypes';

export class ArticleComments extends Component {
  state = {
    likes: 154,
    dislikes: 1,
    numberOfReply: 12,
    displayTextArea: 'none',
    clicked: false,
    limit: 3,
    offset: 1,
    comments: [],
  };

  componentDidMount() {
    const { slug } = this.props;
    this.props.fetchArticleCommentsAction(slug, this.state.offset, this.state.limit);
    this.props.fetchArticleCommentsAction(slug);
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    const { data } = nextProps;
    const ParentsComments = (data || []).filter(({ parentCommentId }) => !parentCommentId);
    this.setState({ comments: ParentsComments });
  }

  handleClick = () => {
    this.setState({
      clicked: !this.state.clicked,
      displayTextArea: this.state.clicked ? 'none' : 'block',
    });
  };

  fetchMore = () => {
    const { offset, limit } = this.state;
    const { slug } = this.props;
    this.setState({ offset: offset + limit });
    fetch(
      `${actionTypes.BACKEND_URL}/api/${actionTypes.VERSION}/${slug}?offset=${offset}&limit=${limit}`,
    )
      .then((res) => res.json())
      .then((data) => {
        const filteredParentComments = (data.data || []).filter(
          ({ parentCommentId }) => !parentCommentId,
        );
        this.setState({ comments: this.state.comments.concat(filteredParentComments) });
      });
  };



  render() {
    const {
      displayTextArea,
      likes,
      dislikes,
      numberOfReply,
      comments,
    } = this.state;
    const {
      data, image, username, message, slug,
    } = this.props;
    const childrenComments = (data || []).filter(({ parentCommentId }) => parentCommentId);
    return (
      <div className="commentArea" style={style}>
        <div className="commentTextAreaClass">
          <div style={{ textAlign: 'center' }}>
            <button id="button3" type="button" onClick={this.handleClick}>
              <i className="fas fa-plus-circle" />
            </button>
          </div>
          <div style={{ display: displayTextArea }}>
            <CommentTextArea
              username={username}
              image={image}
              slug={slug}
            />
          </div>
        </div>
        <div className="listOfComments">
          <p className="comment-p">
            {' '}
            {data.length}
            {' '}
            {data.length <= 1 ? 'comment' : 'comments'}
          </p>
          {comments.length > 0 ? (
            <div style={{ overflow: 'auto', height: '30rem' }}>
              <InfiniteScroll
                dataLength={comments && comments.length}
                next={this.fetchMore}
                hasMore
              >
                {comments && comments.map((comment) => (
                  <CommentCard
                    key={uuid()}
                    likes={likes}
                    dislikes={dislikes}
                    numberOfReply={numberOfReply}
                    comment={comment && comment.body}
                    timeCreated={comment && comment.timeCreated}
                    commentedUser={comment && comment.username}
                    commenterProfileImage={comment && comment.userImage}
                    commentId={comment.id}
                    slug={slug}
                    childrenComments={childrenComments.filter(
                      ({ parentCommentId }) => Number(parentCommentId) === Number(comment.id),
                    )}
                  />
                ))}
              </InfiniteScroll>
            </div>
          ) : (
            message
          )}
        </div>
      </div>
    );
  }
}

ArticleComments.propTypes = {
  data: PropTypes.array,
  image: PropTypes.string,
  username: PropTypes.string,
  fetchArticleCommentsAction: PropTypes.func.isRequired,
  message: PropTypes.string,
};
ArticleComments.defaultProps = {
  data: [],
  image: '',
  username: '',
  message: '',
};
const mapStateToProps = ({ comments: { data, message }, user: { image, username } }) => ({
  data,
  image,
  username,
  message,
});
export default withRouter(connect(
  mapStateToProps,
  { fetchArticleCommentsAction },
)(ArticleComments));
