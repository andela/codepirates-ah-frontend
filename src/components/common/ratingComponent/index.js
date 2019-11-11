import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Rating from 'react-rating';
import style from './ratingComponent.scss';

const theme = {
  color: '#ffd700',
  border: '1px solid #fff',
  fontSize: '13px',
};
export default class RatingArticleCardComponent extends Component {
  render() {
    const { readonly, onChange, placeholderRating } = this.props;
    return (
      <div className="landingArticleCardRating" style={style}>
        <div className="landingArticleCardRating--rating">
          <p>Rating:</p>
        </div>
        <div className="landingArticleCardRating--stars">
          <Rating style={theme} emptySymbol="far fa-star" fullSymbol="fas fa-star" placeholderSymbol="fas fa-star" placeholderRating={placeholderRating} onChange={onChange} readonly={readonly} />
        </div>
        <div className="landingArticleCardRating--elipesIcon">
          <i className="fas fa-ellipsis-v" />
        </div>
      </div>
    );
  }
}
RatingArticleCardComponent.defaultProps = {
  readonly: true,
  onChange: PropTypes.func,
  placeholderRating: 0,
};
RatingArticleCardComponent.propTypes = {
  readonly: PropTypes.bool,
  onChange: PropTypes.func,
  placeholderRating: PropTypes.number,
};
