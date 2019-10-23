import React, { Component } from 'react';
import propTypes from 'prop-types';
import style from './articleCardTextComponent.scss';

export default class ArticleCardTextComponent extends Component {
  render() {
    const {
      description, title, views,
    } = this.props;
    return (
      <div className="landingArticleCardText" style={style}>
        <div className="landingArticleCardText--title">
          <h4>{title}</h4>
        </div>
        <div className="landingArticleCardText--description">
          <p>
            {description}
          </p>
        </div>
        <hr />
        <div className="landingArticleCardText--viewsAndClaps">
          <div className="landingArticleCardText__views">
            <p>
              <span>{views}</span>
views
            </p>
          </div>
          <div className="landingArticleCardText__claps">
            <p>100</p>
            <i className="fas fa-sign-language" />
          </div>
        </div>
      </div>
    );
  }
}

ArticleCardTextComponent.propTypes = {
  description: propTypes.string,
  title: propTypes.string,
  views: propTypes.number,
};

ArticleCardTextComponent.defaultProps = {
  description: '',
  title: '',
  views: '',
};

