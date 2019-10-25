import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import style from './landingPage.scss';
import Footer from '../common/footer/Footer';
import LandingPageLinks from './landingPageLinks';
import InterestArticlesAreaUpperGreenLine from './interestArticleAreaUpperLine';
import PopularArticleAreaUpperLine from './interestArticleAreaUpperLine/popularArticleAreaUpperHeader';
import LandingPageSearchArea from './landingPageSearchArea';
import LandingPageViewMoreArticles from './landingPageViewMoreArticles';
import LandingPageArrowArea from './landingPageArrowArea';
import displayArticles from '../../redux/actions/landingPage';
import displayPopularArticles from '../../redux/actions/landingPage/popularArticles';
import NavBar from '../common/navbar/navbar';
import ListOfArticles from '../common/listOfArticles';

export class LandingPage extends Component {
  state = {
    articles: [],
    popularArticles: [],
    initialLimits: {
      limitArticlesNumber: 3,
      limitPopularArticlesNumber: 3,
    },
    limitArticlesNumber: 3,
    limitPopularArticlesNumber: 3,
    loading: false,
  };

  componentDidMount() {
    this.setState((prevState) => ({ ...prevState, loading: true }));
    const { props } = this;
    props.displayArticles().then((res) => {
      if (res.payload.status !== 200) {
        this.setState((prevState) => ({ ...prevState, loading: true }));
      }
      this.setState((prevState) => ({ ...prevState, loading: false }));
    });
    props.displayPopularArticles().then((res) => {
      if (res.payload.status !== 'success') {
        this.setState((prevState) => ({ ...prevState, loading: true }));
      }
      this.setState((prevState) => ({ ...prevState, loading: false }));
    });
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    const { data, popularArticles } = nextProps;
    this.setState((prevState) => ({ ...prevState, articles: data, popularArticles }));
  }

  viewMoreArticles = (viewMoreArticlesButton, articlesNumber, number = 5) => {
    const { state } = this;
    const oldNumber = state[viewMoreArticlesButton];
    const initialLimit = state.initialLimits[viewMoreArticlesButton];
    const newNumber = oldNumber >= articlesNumber ? initialLimit : oldNumber + number;
    this.setState((prevState) => ({
      ...prevState,
      [viewMoreArticlesButton]: newNumber,
    }));
  };


  imagePart = () => (
    <div className="row landingPage--imagePart">
      <div className="col-md-12 landingPage--header">
        <NavBar />
      </div>
      <div className="col-md-12 landingPage--belowHeaderPart">
        <LandingPageArrowArea />
      </div>
    </div>
  );

  searchArea = () => (
    <div className="row landingPage--searchPart">
      <div className="col-md-12 landingPage__searchArea">
        <div className="searchArea-card">
          <LandingPageSearchArea />
        </div>
      </div>
    </div>
  );

  mostRecentTitle = () => (
    <div className="row landingPage--belowSearchPart">
      <div className="col-md-12 landingPage__mostRecentTitle">
        <h2>The most recent articles on Authors' haven</h2>
      </div>
    </div>
  );

  mostRecentArticles = (displayFirstAndSecond, displayThirdAndFourth) => (
    <div className="row landingPage--bigArticleArea">
      <div className="col-md-6 landingPage__bigArticleAreaLeft">
        <div className="bigArticleAreaLeft-card">
          <ListOfArticles articles={displayFirstAndSecond} />
        </div>
      </div>
      <div className="col-md-6 landingPage__bigArticleAreaRight">
        <div className="bigArticleAreaRight-card">
          <div className="popularArea-articleCard-div">
            <ListOfArticles articles={displayThirdAndFourth} />
          </div>
        </div>
      </div>
    </div>
  );

  render() {
    const {
      articles,
      popularArticles,
      limitArticlesNumber,
      limitPopularArticlesNumber,
      loading,
    } = this.state;
    const mostTwoRecentArticles = articles.slice(0, 2);
    const secondAndThirdArticles = articles.slice(2, 4);
    const remainingArticles = articles.slice(4);

    return (
      <div className={classnames('ui', 'form', { loading })}>
        <div className="container-fluid landing" style={style}>
          {this.imagePart()}
          {this.searchArea()}
          {this.mostRecentTitle()}
          {this.mostRecentArticles(mostTwoRecentArticles, secondAndThirdArticles)}
          <div className="row landingPage--popularArea">
            <div className="col-md-6 landingPage__popularAreaLeft">
              <div className="popularAreaLeft-card">
                <div className="popularAreaLeft__upperLine">
                  <InterestArticlesAreaUpperGreenLine />
                </div>
                <div className="popularArea__articlesArea">
                  <div className="popularArea-articleCard-div">
                    <ListOfArticles
                      articles={remainingArticles}
                      limitArticlesNumber={limitArticlesNumber}
                    />
                  </div>
                </div>
                <div className="landingPage__moreArticles">
                  <LandingPageViewMoreArticles
                    key="1"
                    onClick={() => this.viewMoreArticles('limitArticlesNumber', remainingArticles.length, 4)}
                    buttonMessage={
                      limitArticlesNumber < (remainingArticles || []).length
                        ? 'view more articles'
                        : 'view less articles'
                    }
                  />
                </div>
              </div>
              <div className="popularAreaRight-freeSpace" />
            </div>
            <div className="col-md-6 landingPage__popularAreaRight">
              <div className="popularAreaRight-card">
                <div className="popularAreaRight__upperLine">
                  <PopularArticleAreaUpperLine />
                </div>
                <div className="popularArea__articlesArea">
                  <div className="popularArea-articleCard-div">
                    {' '}
                    <ListOfArticles
                      articles={popularArticles}
                      limitArticlesNumber={limitPopularArticlesNumber}
                    />
                  </div>
                </div>
                <div className="landingPage__moreArticles">
                  <LandingPageViewMoreArticles
                    key="2"
                    onClick={() => this.viewMoreArticles('limitPopularArticlesNumber', popularArticles.length, 6)}
                    buttonMessage={
                      limitPopularArticlesNumber < (popularArticles || []).length
                        ? 'view more popular articles'
                        : 'view less articles'
                    }
                  />
                </div>
              </div>
              <div className="popularAreaRight-freeSpace" />
              <div className="popularAreaRight-links">
                <LandingPageLinks />
              </div>
            </div>
          </div>
          <div className="row image-div landingPage--footer">
            <div className="landingPage__footerArea">
              <Footer />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

LandingPage.propTypes = {
  displayArticles: PropTypes.func.isRequired,
  displayPopularArticles: PropTypes.func.isRequired,
  data: PropTypes.array,
  popularArticles: PropTypes.array,
};
LandingPage.defaultProps = {
  data: [],
  popularArticles: [],
};
const mapStatesToProps = ({
  articles: {
    data,
    popular: { data: popularArticles },
  },
}) => ({
  data,
  popularArticles,
});
export default connect(
  mapStatesToProps,
  { displayArticles, displayPopularArticles },
)(LandingPage);
