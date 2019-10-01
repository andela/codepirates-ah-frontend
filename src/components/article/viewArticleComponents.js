import React from 'react';
import Pagination from 'rc-pagination';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';
import Pages from 'lodash';
import './viewArticle.scss';
import Clap from '../common/clap/clap';
import Dislike from '../common/dislike/dislike';
import userImage from '../../../public/assets/images/images/userIcon.png';
import ArticleCard from '../common/articleCard';
import coverImage from '../../../public/assets/images/nature.jpeg';
import RatingArticleCardComponent from '../common/ratingComponent/index';
import RateComponent from '../rateButton/rate';
import MoreOnArticle from '../moreAction/index';

export const paginate = (lists, pageNumber, pageSize) => {
  const startIndex = (pageNumber - 1) * pageSize;
  return Pages(lists)
    .slice(startIndex)
    .take(pageSize)
    .value();
};

export const LeftSideBar = ({
  firstname,
  lastname,
  profilePic,
  LeftSideStyles,
  profilePicStyles,
}) => (
  <div className="left-side">
    <div className="icon" style={LeftSideStyles}>
      <div style={profilePicStyles}>
        <img
          src={profilePic == null ? userImage : profilePic}
          alt="user icon"
          width="40px"
          height="40px"
        />
      </div>
      <a href="/users/follow" className="btn btn-outline-primary">
        Follow
      </a>
    </div>
    <div className="userprofilename">
      <p>
        {firstname}
        {' '}
&nbsp;
        {' '}
        {lastname}
      </p>
      <p>32 Publications</p>
    </div>
  </div>
);

export const ArticleContent = ({
  title, description, body, slug, author, username,
}) => (
  <div className="middle-up" style={{ paddingTop: '0px' }}>
    <div className="article-part">
      <div className="article-title">
        <h1>{title}</h1>
      </div>
      <div className="article-description">
        <h4>{description}</h4>
      </div>
      <div className="article-paragraph">{ReactHtmlParser(body)}</div>
    </div>
    <div className="middle-line" />
    <div className="article-events">
      <div className="L">
        <div className="clap">
          <Clap username={username} slug={slug} />
        </div>
        <div className="dislike">
          <Dislike username={username} slug={slug} />
        </div>
        <div className="rate">
          <RateComponent slug={slug} author={author} />
        </div>
      </div>
      <div className="M">
        <p>
          <span>154</span>
          comments
        </p>
        <div className="plus-circle">
          <i className="fas fa-plus-circle" />
        </div>
      </div>
      <div className="R">
        <i className="fab fa-twitter" />
        <i className="fab fa-facebook-f" />
        <i className="fab fa-linkedin-in" />
        <i className="fab fa-google" />
        <i className="far fa-bookmark" />
        <MoreOnArticle slug={slug} author={author} />
      </div>
    </div>
  </div>
);

export const RecentArticles = ({
  onChange, current, total, articles,
}) => (
  <div className="middle-down">
    <h1>Most recent on Author’s Haven</h1>
    <div className="popular-div">
      {articles.map((article) => (
        <ArticleCard
          key={article.slug}
          coverImage={coverImage}
          description={article.description}
          title={article.title}
          views={article.views}
          readreadTime={article.readtime}
          createdTime={article.timeCreated}
          username={article.username}
          slug={article.slug}
        />
      ))}
    </div>
    <div className="pagination-div">
      <Pagination
        onChange={onChange}
        current={current}
        total={total}
        pageSize={2}
      />
    </div>
  </div>
);

export const RightSideBar = ({ readtime, createdAt, rating }) => (
  <div className="right-side" style={{ marginLeft: 'auto' }}>
    <div className="rating-pub-read-time">
      <p>
        Published: &nbsp;
        <span>{createdAt}</span>
      </p>
      <p>{readtime}</p>
    </div>
    <RatingArticleCardComponent placeholderRating={rating} readonly />
  </div>
);

ArticleContent.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  body: PropTypes.string,
  slug: PropTypes.string,
  author: PropTypes.string,
};
ArticleContent.defaultProps = {
  title: '',
  description: '',
  body: '',
  slug: '',
  author: '',
};

RecentArticles.propTypes = {
  onChange: PropTypes.func,
  current: PropTypes.number,
  total: PropTypes.number,
  articles: PropTypes.array,
};
RecentArticles.defaultProps = {
  onChange: () => ({}),
  current: 0,
  total: 0,
  articles: [],
};
RightSideBar.propTypes = {
  readtime: PropTypes.string,
  createdAt: PropTypes.string,
  rating: PropTypes.number,
};
RightSideBar.defaultProps = {
  readtime: '',
  createdAt: '',
  rating: 0,
};
LeftSideBar.propTypes = {
  firstname: PropTypes.string,
  lastname: PropTypes.string,
  profilePic: PropTypes.string,
  LeftSideStyles: PropTypes.object,
  profilePicStyles: PropTypes.object,
};
LeftSideBar.defaultProps = {
  firstname: '',
  lastname: '',
  profilePic: '',
  LeftSideStyles: '',
  profilePicStyles: '',
};
