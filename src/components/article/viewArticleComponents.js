import React from 'react';
import Pagination from 'rc-pagination';
import PropTypes from 'prop-types';
import Pages from 'lodash';
import './viewArticle.scss';
import star from '../../../public/assets/images/images/yellowStar.png';
import blankStar from '../../../public/assets/images/images/blankRateStar.png';
import userImage from '../../../public/assets/images/images/userIcon.png';
import ArticleCard from '../common/articleCard';
import coverImage from '../../../public/assets/images/nature.jpeg';

export const paginate = (lists, pageNumber, pageSize) => {
  const startIndex = (pageNumber - 1) * pageSize;
  return Pages(lists).slice(startIndex).take(pageSize).value();
};

export const LeftSideBar = ({
  firstname, lastname, profilePic, LeftSideStyles, profilePicStyles,
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
      <a href="/users/follow" className="btn btn-outline-primary">Follow</a>
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

export const ArticleContent = ({ title, description, body }) => (
  <div className="middle-up">
    <div className="article-part">
      <div className="article-title">
        <h1>{title}</h1>
      </div>
      <div className="article-description">
        <h4>
          {description}
        </h4>
      </div>
      <div className="article-paragraph">
        {body}
      </div>
    </div>
    <div className="middle-line" />
    <div className="article-events">
      <div className="L">
        <div className="l-icon">
          <i className="fas fa-thumbs-up" />
          <p>15k</p>
        </div>
        <div className="l-icon">
          <i className="fas fa-thumbs-down" />
          <p>123</p>
        </div>
        <div className="l-icon">
          <i className="fas fa-star" />
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
        <i className="fas fa-ellipsis-v" />
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
          coverImage={coverImage}
          description={article.description}
          title={article.title}
          views={article.views}
          readreadTime={article.readtime}
          createdTime={article.timeCreated}
          username={article.username}
        />
      ))}
    </div>
    <div className="pagination-div">
      <Pagination onChange={onChange} current={current} total={total} pageSize={2} />
    </div>
  </div>
);

export const RightSideBar = ({ readtime, createdAt }) => (
  <div className="right-side" style={{ marginLeft: 'auto' }}>
    <div className="rating-pub-read-time">
      <p>
Published: &nbsp;
        <span>{createdAt}</span>
      </p>
      <p>{readtime}</p>
    </div>
    <div className="article-rates">
      <div className="rate-stars">
      Rating:
        <img
          src={star}
          alt="yellow rating start"
          height="12px"
          width="12px"
        />
        <img
          src={star}
          alt="yellow rating start"
          height="12px"
          width="12px"
        />
        <img
          src={star}
          alt="yellow rating start"
          height="12px"
          width="12px"
        />
        <img
          src={blankStar}
          alt="blankrating start"
          height="12px"
          width="12px"
        />
        <img
          src={blankStar}
          alt="blankrating start"
          height="12px"
          width="12px"
        />
      </div>
    </div>
  </div>
);

ArticleContent.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  body: PropTypes.string,
};
ArticleContent.defaultProps = {
  title: '',
  description: '',
  body: '',
};

RecentArticles.propTypes = {
  onChange: PropTypes.string,
  current: PropTypes.string,
  total: PropTypes.string,
  articles: PropTypes.string,
};
RecentArticles.defaultProps = {
  onChange: '',
  current: '',
  total: '',
  articles: '',
};
RightSideBar.propTypes = {
  readtime: PropTypes.string,
  createdAt: PropTypes.string,
};
RightSideBar.defaultProps = {
  readtime: '',
  createdAt: '',
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
