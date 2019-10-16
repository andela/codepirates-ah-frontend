import React from 'react';
import Pagination from 'rc-pagination';
import Pages from 'lodash';
import './viewArticle.scss';
import star from '../../../public/assets/images/images/yellowStar.png';
import blankStar from '../../../public/assets/images/images/blankRateStar.png';
import userImage from '../../../public/assets/images/images/userIcon.png';
import ArticleCard from './articleCard';
import coverImage from '../../../public/assets/images/nature.jpeg';

export const paginate = (lists, pageNumber, pageSize) => {
  const startIndex = (pageNumber - 1) * pageSize;
  return Pages(lists).slice(startIndex).take(pageSize).value();
};
export const TopComponent = () => (
  <div className="top">
    <div className="top-p"><p>Authors haven</p></div>
    <div className="top-buttons">
      <div className="header-btn">
        <a href="./login.html">Login</a>
        <a href="./signup.html" className="submit-btn">Sign up</a>
      </div>
    </div>
  </div>
);

export const LeftSideBar = () => (
  <div className="left-side">
    <div className="icon">
      <img
        src={userImage}
        alt="user icon"
        width="40px"
        height="40px"
      />
      <button type="button" className="submit-btn">Follow</button>
    </div>
    <div className="userprofilename">
      <p>John Doe</p>
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
        <ArticleCard coverImage={coverImage} />
      ))}
    </div>
    <div className="pagination-div">
      <Pagination onChange={onChange} current={current} total={total} pageSize={2} />
    </div>
  </div>
);

export const RightSideBar = ({ readtime, createdAt }) => (
  <div className="right-side">
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

export const Footer = () => (
  <div className="bottom">
    <div className="middle-line" />
    <div className="footer">
      <div className="footer-icons">
        &nbsp;
        &nbsp;
        &nbsp;
        <i className="fab fa-twitter" />
        &nbsp;
        &nbsp;
        &nbsp;
        <i className="fab fa-facebook-f" />
        &nbsp;
        &nbsp;
        &nbsp;
        <i className="fab fa-linkedin-in" />
        &nbsp;
        &nbsp;
        &nbsp;
        <i className="fab fa-google" />
      </div>
      <div className="at-authors-haven">
        <h3>&apos; Authors haven Andela</h3>
      </div>
    </div>
  </div>
);
