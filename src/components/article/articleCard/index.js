import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './articleCard.scss';
import UserIcon from './userIcon';
import RatingArticleCardComponent from './ratingComponent';
import ArticleCardTextComponent from './articleCardTextComponent';

export default class ArticleCard extends Component {
  render() {
    const { coverImage } = this.props;
    return (
      <div className="landingArticlecard" style={style}>
        <div className="landingArticleCard--image">
          <img src={coverImage} alt="" />
        </div>
        <div className="landingArticleCard--userRatingPart">
          <div className="landingArticleCard__userIconArea">
            <UserIcon />
          </div>
          <div className="landingArticleCard__RatingIconArea">
            <RatingArticleCardComponent />
          </div>
        </div>
        <div className="landingArticleCard--textPart">
          <ArticleCardTextComponent />
        </div>
      </div>
    );
  }
}
ArticleCard.propTypes = {
  coverImage: PropTypes.string,
};

ArticleCard.defaultProps = {
  coverImage: '',
};
