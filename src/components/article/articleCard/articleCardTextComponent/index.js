import React, { Component } from 'react';
import style from './articleCardTextComponent.scss';

export default class ArticleCardTextComponent extends Component {
  render() {
    return (
      <div className="landingArticleCardText" style={style}>
        <div className="landingArticleCardText--title">
          <h4>The best rocky mountains on the African continent</h4>
        </div>
        <div className="landingArticleCardText--description">
          <p>
            Nature, in the broadest sense, is the natural, physical, or material world or universe.
            Nature can refer to the phenomena of the physical world
          </p>
        </div>
        <hr />
        <div className="landingArticleCardText--viewsAndClaps">
          <div className="landingArticleCardText__views">
            <p>
              <span>500 </span>
views
            </p>
          </div>
          <div className="landingArticleCardText__views">
            <p>
              <span>Write a comment</span>
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
