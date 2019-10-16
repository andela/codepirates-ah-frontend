import React, { Component } from 'react';
import Rating from 'react-rating';
import style from './ratingComponent.scss';


const theme = {
  color: '#ffd700',
  border: '1px solid #fff',
  fontSize: '14px',
};
export default class RatingArticleCardComponent extends Component {
  render() {
    return (
      <div className="landingArticleCardRating" style={style}>
        <div className="landingArticleCardRating--rating">
          <p>Rating:</p>
        </div>
        <div className="landingArticleCardRating--stars">
          <Rating
            style={theme}
            emptySymbol="far fa-star"
            fullSymbol="fas fa-star"
            readonly
          />
        </div>
        <div className="landingArticleCardRating--elipesIcon">
          <i className="fas fa-ellipsis-v" />
        </div>
      </div>
    );
  }
}
