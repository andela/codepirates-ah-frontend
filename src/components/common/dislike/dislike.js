import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import jwt from 'jsonwebtoken';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import * as faRegular from '@fortawesome/free-regular-svg-icons';
import {
  dislikeArticle, getDislikes,
} from '../../../redux/actions/like/fetchLike';

import './dislike.scss';

export class Dislike extends Component {
  constructor(props) {
    super(props);
    this.state = {
      disliked: false,
      dislikes: 0,
      isArticleOwner: false,
    };
  }

  async componentDidMount() {
    const { getDislikes: getAllDislikes } = this.props;
    const token = localStorage.getItem('token');
    if (!token) return;
    const payload = jwt.decode(token);
    const { slug, username } = this.props;
    if (username === payload.username) this.setState({ isArticleOwner: true });
    await getAllDislikes(slug);
    const { dislikes: allDislikes } = this.props;
    const isDisliked = localStorage.getItem('dislikedArticle') !== 'false';
    this.setState({ dislikes: allDislikes, disliked: isDisliked });
  }

  handleDisLike = async () => {
    if (!localStorage.getItem('token')) {
      this.props.history.push(
        {
          pathname: '/login',
          state: { from: this.props.location },
        },
      );
      return;
    }
    const { dislikeArticle: dislike, getDislikes: getAllDislikes } = this.props;
    const { slug } = this.props;

    const isDisliked = await dislike(slug);
    const allDislikes = await getAllDislikes(slug);
    localStorage.setItem('dislikedArticle', isDisliked);
    this.setState({ dislikes: allDislikes, disliked: isDisliked });
  }

  render() {
    const { disliked, dislikes, isArticleOwner } = this.state;
    return (
      <div className={`row dislikeButton${isArticleOwner ? ' hide' : ''}`}>
        <FontAwesomeIcon className="dislikeButton" name="disliked" onClick={() => this.handleDisLike()} icon={disliked ? faThumbsDown : faRegular.faThumbsDown} />
        {dislikes}
      </div>
    );
  }
}

const mapStateToProps = ({ articleFeedback }) => ({
  dislikePending: articleFeedback.dislikePending,
  dislikes: articleFeedback.dislikes,
  dislikeError: articleFeedback.dislikeError,
});

Dislike.defaultProps = {
  dislikes: 0,
};

Dislike.propTypes = {
  dislikeArticle: PropTypes.func.isRequired,
  getDislikes: PropTypes.func.isRequired,
  dislikes: PropTypes.number,
};

export default withRouter(connect(mapStateToProps, {
  dislikeArticle, getDislikes,
})(Dislike));
