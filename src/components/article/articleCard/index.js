import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './articleCard.scss';
import UserIcon from './userIcon';
import RatingArticleCardComponent from './ratingComponent';
import ArticleCardTextComponent from './articleCardTextComponent';

export default class ArticleCard extends Component {
  render() {
    const {
      coverImage, description, title, views, readtime, timeCreated, username,
    } = this.props;
    return (
      <div className="landingArticlecard" style={style}>
        <div className="landingArticleCard--image">
          <img src={coverImage} alt="" />
        </div>
        <div className="landingArticleCard--userRatingPart">
          <div className="landingArticleCard__userIconArea">
            <UserIcon username={username} timeCreated={timeCreated} readtime={readtime} />
          </div>
          <div className="landingArticleCard__RatingIconArea">
            <RatingArticleCardComponent />
          </div>
        </div>
        <div className="landingArticleCard--textPart">
          <ArticleCardTextComponent description={description} title={title} views={views} />
        </div>
      </div>
    );
  }
}
ArticleCard.propTypes = {
  coverImage: PropTypes.string,
  description: PropTypes.string,
  title: PropTypes.string,
  readtime: PropTypes.string,
  views: PropTypes.number,
  timeCreated: PropTypes.string,
  username: PropTypes.string,
};

ArticleCard.defaultProps = {
  coverImage: '',
  description: '',
  title: '',
  readtime: '',
  views: '',
  timeCreated: '',
  username: '',
};
