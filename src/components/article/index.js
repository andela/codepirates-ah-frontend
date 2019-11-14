import React, { Component } from 'react';
import { connect } from 'react-redux';
import './viewArticle.scss';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {
  LeftSideBar,
  ArticleContent,
  RecentArticles,
  RightSideBar,
  paginate,
} from './viewArticleComponents';
import {
  viewArticle,
  fetchArticle,
} from '../../redux/actions/viewSingleArticle/viewSingleArticleAction';
import { getAllArticles } from '../../redux/actions/viewSingleArticle/getRecentArticles';
import HighlightArticle from './highlightArticle';
import { getHighlights } from '../../redux/actions/highlight';

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
          firstname: '',
          lastname: '',
          image: '',
          username: '',
        },
        taglist: [],
      },
    },
    allArticles: [],
    paginatedArticles: [],
    numberOfArticles: 0,
    current: 1,
    pageSize: 2,
    loading: false,
  };

  async componentDidMount() {
    this.setState({ loading: true });
    const {
      viewArticle: viewSingleArticle,
      getAllArticles: articles,
      match: { params },
      geter,
      highlight,
    } = this.props;
    await viewSingleArticle(params.slug, geter, highlight);
    articles();
  }

  componentWillReceiveProps(nextProps) {
    const { pageSize } = this.state;
    const {
      getArticle,
      articles: { data },
    } = this.props;
    if (nextProps.getArticle !== getArticle) {
      this.setState({ getArticle: nextProps.getArticle });
    }
    if (nextProps.articles.data !== data) {
      const currentArticles = paginate(nextProps.articles.data, 0, pageSize);

      this.setState({
        allArticles: nextProps.articles.data,
        numberOfArticles: nextProps.articles.data.length,
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
  };

  render() {
    const {
      getArticle: { data },
      current,
      numberOfArticles,
      paginatedArticles,
      loading,
    } = this.state;

    const LeftSideStyles = {
      display: 'flex',
      flexDirection: 'column',
    };
    const profilePicStyles = {
      marginBottom: '10px',
    };
    return (
      <>
        <div className={classnames('ui', 'form', 'container', { loading })}>
          {data.author.firstname !== '' && (
            <div className="viewArticleContainer">
              <LeftSideBar
                firstname={data.author.firstname}
                lastname={data.author.lastname}
                profilePic={data.author.image}
                LeftSideStyles={LeftSideStyles}
                profilePicStyles={profilePicStyles}
              />
              <ArticleContent
                title={data.title}
                username={data.author.firstname}
                id={data.id}
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
                taglist={data.taglist}
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
              <HighlightArticle />
            </div>
          )}
        </div>
      </>
    );
  }
}

ViewArticle.propTypes = {
  viewArticle: PropTypes.func,
  geter: PropTypes.func,
  highlight: PropTypes.func,
  getArticle: PropTypes.object,
  getAllArticles: PropTypes.func,
  articles: PropTypes.object,
  data: PropTypes.array,
  match: PropTypes.object,
};
ViewArticle.defaultProps = {
  viewArticle: '',
  geter: fetchArticle,
  highlight: getHighlights,
  getArticle: '',
  getAllArticles: '',
  articles: '',
  data: [],
  match: '',
};
const mapStateToProps = ({ viewArticle: getArticle, articles }) => ({
  getArticle,
  articles,
});
export default connect(mapStateToProps, { viewArticle, getAllArticles })(
  ViewArticle,
);
