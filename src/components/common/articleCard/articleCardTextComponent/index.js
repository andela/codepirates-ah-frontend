import React from 'react';
import PropTypes from 'prop-types';
import style from './articleCardTextComponent.scss';

const ArticleCardTextComponent = ({
  title, description, views, slug, claps,
}) => (
  <div className="landingArticleCardText" style={style}>
    <div className="landingArticleCardText--title">
      <h5>
        <a href={`/article/${slug}`}>
          {title.length > 76 ? `${title.substring(0, 76)} ...` : title}
        </a>
      </h5>
    </div>
    <div className="landingArticleCardText--description">
      <p>{description.length > 120 ? `${description.substring(0, 120)} ...` : description}</p>
    </div>
    <hr />
    <div className="landingArticleCardText--viewsAndClaps">
      <div className="landingArticleCardText__views">
        <p>
          <span>{views}</span>
          {' '}
views
        </p>
      </div>
      <div className="landingArticleCardText__claps">
        <p>{claps}</p>
        <i className="fas fa-sign-language" />
      </div>
    </div>
  </div>
);

ArticleCardTextComponent.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string,
  views: PropTypes.number,
  slug: PropTypes.string,
  claps: PropTypes.number,
};

ArticleCardTextComponent.defaultProps = {
  description: '',
  title: '',
  views: null,
  slug: '',
  claps: 0,
};
export default ArticleCardTextComponent;
