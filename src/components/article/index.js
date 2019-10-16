import React, { Component } from 'react';
import './viewArticle.scss';
import {
  TopComponent, LeftSideBar, ArticleContent, RecentArticles, RightSideBar, Footer,
} from './viewArticleComponents';

class ViewArticle extends Component {
    state = { }

    render() {
      return (
        <div className="container">
          <TopComponent />
          <LeftSideBar />
          <ArticleContent />
          <RecentArticles />
          <RightSideBar />
          <Footer />
        </div>

      );
    }
}

export default ViewArticle;
