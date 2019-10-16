import React, { Component } from 'react';
import { connect } from 'react-redux';
import './viewArticle.scss';
import PropTypes from 'prop-types';
import {
  TopComponent, LeftSideBar, ArticleContent, RecentArticles, RightSideBar, Footer, paginate,
} from './viewArticleComponents';

import { viewArticle } from '../../redux/actions/viewSingleArticle/viewSingleArticleAction';
import { getAllArticles } from '../../redux/actions/viewSingleArticle/getRecentArticles';


class ViewArticle extends Component {
    state = {
      getArticle: {
        data: {
          slug: '', title: '', description: '', body: '', readtime: '', createdAt: '',
        },
      },
      allArticles: [],
      paginatedArticles: [],
      numberOfArticles: 0,
      current: 1,
      pageSize: 2,
    }

    componentDidMount() {
      const { viewArticle: viewSingleArticle, getAllArticles: articles } = this.props;
      viewSingleArticle('fakeslug2');
      articles();
    }

    componentWillReceiveProps(nextProps) {
      console.log('next props', nextProps);
      const { pageSize } = this.state;
      const { getArticle, articles: { data } } = this.props;
      if (nextProps.getArticle !== getArticle) {
        console.log(nextProps.getArticle);
        this.setState({ getArticle: nextProps.getArticle });
      }
      if (nextProps.articles.data !== data) {
        const currentArticles = paginate(nextProps.articles.data, 0, pageSize);
        this.setState({
          allArticles: nextProps.articles.data,
          numberOfArticles: nextProps.articles.allArticle,
          paginatedArticles: currentArticles,
        });
        console.log(1, currentArticles);
      }
    }

    onChange = (page) => {
      const { allArticles, pageSize } = this.state;
      const currentArticles = paginate(allArticles, page, pageSize);

      this.setState({
        current: page,
        paginatedArticles: currentArticles,
      });
      console.log(page, currentArticles);
    }


    render() {
      const {
        getArticle: { data }, current, numberOfArticles, paginatedArticles, allArticles,
      } = this.state;
      // console.log('numberOfArticles', numberOfArticles);
      // console.log('numberOfArticles', allArticles);
      console.log('Paginated', paginatedArticles);
      return (
        <div className="container">
          <TopComponent />
          <LeftSideBar />
          <ArticleContent title={data.title} description={data.description} body={data.body} />
          <RecentArticles onChange={this.onChange} current={current} total={numberOfArticles} pageSize={2} articles={paginatedArticles} />
          <RightSideBar readtime={data.readtime} createdAt={data.createdAt} />
          <Footer />
        </div>

      );
    }
}

ViewArticle.propTypes = {
  viewArticle: PropTypes.func.isRequired,
  getArticle: PropTypes.object.isRequired,
  getAllArticles: PropTypes.func.isRequired,
  articles: PropTypes.object.isRequired,
  data: PropTypes.array.isRequired,
  allArticle: PropTypes.number.isRequired,
};
ViewArticle.defaultProps = {

};
const mapStateToProps = ({ viewArticle: getArticle, articles }) => ({
  getArticle, articles,
});
export default connect(mapStateToProps, { viewArticle, getAllArticles })(ViewArticle);
