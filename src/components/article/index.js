import React, { Component } from 'react';
import { connect } from 'react-redux';
import './viewArticle.scss';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {
  LeftSideBar, ArticleContent, RecentArticles, RightSideBar, paginate,
} from './viewArticleComponents';

import { viewArticle } from '../../redux/actions/viewSingleArticle/viewSingleArticleAction';
import { getAllArticles } from '../../redux/actions/viewSingleArticle/getRecentArticles';


export class ViewArticle extends Component {
    state = {
      getArticle: {
        data: {
          slug: '',
          title: '',
          description: '',
          body: '',
          readtime: '',
          createdAt: '',
          claps: '',
          rating: '',
          author: {
            firstname: '', lastname: '', image: '', username: '',
          },
        },
      },
      allArticles: [],
      paginatedArticles: [],
      numberOfArticles: 0,
      current: 1,
      pageSize: 2,
      loading: false,
    }

    componentDidMount() {
      this.setState({ loading: true });
      const {
        viewArticle: viewSingleArticle,
        getAllArticles: articles,
        match: { params },
      } = this.props;
      viewSingleArticle(params.slug);
      articles();
    }

    componentWillReceiveProps(nextProps) {
      const { pageSize } = this.state;
      const { getArticle, articles: { data } } = this.props;
      if (nextProps.getArticle !== getArticle) {
        this.setState({ getArticle: nextProps.getArticle });
      }
      if (nextProps.articles.data !== data) {
        const currentArticles = paginate(nextProps.articles.data, 0, pageSize);
        this.setState({
          allArticles: nextProps.articles.data,
          numberOfArticles: nextProps.articles.allArticle,
          paginatedArticles: currentArticles,
        });
      }
      this.setState({ loading: false });
    }

    onChange = (page) => {
      const { allArticles, pageSize } = this.state;
      const currentArticles = paginate(allArticles, page, pageSize);

      this.setState({
        current: page,
        paginatedArticles: currentArticles,
      });
    }


    render() {
      const {
        getArticle: { data }, current, numberOfArticles, paginatedArticles, loading,
      } = this.state;

      const LeftSideStyles = {
        display: 'flex', flexDirection: 'column',
      };
      const profilePicStyles = {
        marginBottom: '10px',
      };
      return (
        <>
          <div className={classnames('ui', 'form', 'container', { loading })}>
            { data.author.firstname !== ''
            && (
              <div
                className="viewArticleContainer"
              >
                <LeftSideBar
                  firstname={data.author.firstname}
                  lastname={data.author.lastname}
                  profilePic={data.author.image}
                  LeftSideStyles={LeftSideStyles}
                  profilePicStyles={profilePicStyles}
                />
                <ArticleContent
                  title={data.title}
                  description={data.description}
                  body={data.body}
                  claps={data.claps}
                  author={data.author.username}
                  slug={data.slug}
                  onChange={this.onChange}
                  current={current}
                  total={numberOfArticles}
                  pageSize={2}
                  articles={paginatedArticles}
                />
                <RecentArticles
                  onChange={this.onChange}
                  current={current}
                  total={numberOfArticles}
                  pageSize={2}
                  articles={paginatedArticles}
                />
                <RightSideBar
                  rating={parseInt(data.rating, 10)}
                  readtime={data.readtime}
                  createdAt={data.createdAt}
                />
              </div>
            )}
          </div>

        </>

      );
    }
}

ViewArticle.propTypes = {
  viewArticle: PropTypes.func,
  getArticle: PropTypes.object,
  getAllArticles: PropTypes.func,
  articles: PropTypes.object,
  data: PropTypes.array,
  allArticle: PropTypes.string,
  match: PropTypes.object,
};
ViewArticle.defaultProps = {
  viewArticle: '',
  getArticle: '',
  getAllArticles: '',
  articles: '',
  data: [],
  allArticle: '',
  match: '',
};
const mapStateToProps = ({ viewArticle: getArticle, articles }) => ({
  getArticle, articles,
});
export default connect(mapStateToProps, { viewArticle, getAllArticles })(ViewArticle);
