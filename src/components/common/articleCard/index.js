import React from 'react';
import PropTypes from 'prop-types';
import style from './articleCard.scss';
import UserIcon from './userIcon';
import RatingArticleCardComponent from '../ratingComponent';
import ArticleCardTextComponent from './articleCardTextComponent';

const optionImg = 'https://images.pexels.com/photos/1193743/pexels-photo-1193743.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260';

const ArticleCard = ({
  coverImage,
  description,
  title,
  views,
  readTime,
  userIcon,
  username,
  createdTime,
}) => (
  <div className="landingArticlecard" style={style}>
    <div className="landingArticleCard--image">
      <img src={coverImage || optionImg} alt="" />
    </div>
    <div className="landingArticleCard--userRatingPart">
      <div className="landingArticleCard__userIconArea">
        <UserIcon
          readTime={readTime}
          userIcon={userIcon}
          username={username}
          createdTime={createdTime}
        />
      </div>
      <div className="landingArticleCard__RatingIconArea">
        <RatingArticleCardComponent />
      </div>
    </div>
    <div className="landingArticleCard--textPart">
      <ArticleCardTextComponent description={description} title={title} views={views} />
    </div>
  </div>
);
ArticleCard.propTypes = {
  coverImage: PropTypes.string,
  description: PropTypes.string,
  title: PropTypes.string,
  views: PropTypes.number,
  readTime: PropTypes.string,
  userIcon: PropTypes.string,
  username: PropTypes.string,
  createdTime: PropTypes.string,
};

ArticleCard.defaultProps = {
  coverImage: '',
  description: '',
  title: '',
  userIcon: '',
  username: '',
  createdTime: '',
  views: null,
  readTime: null,
};

export default ArticleCard;
