import React from 'react';
import PropTypes from 'prop-types';
import style from './articleCard.scss';
import UserIcon from './userIcon';
import RatingArticleCardComponent from '../ratingComponent/index';
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
  slug,
  claps,
  rating,
  report,
  userImage,
}) => (
  <div className="landingArticlecard" style={style}>
    <div className="landingArticleCard--image">
      <a href={`/article/${slug}`}>
        {' '}
        <img src={coverImage || optionImg} alt="" style={{ objectFit: 'cover' }} />
        {' '}
      </a>
    </div>
    <div className="landingArticleCard--userRatingPart">
      <div className="landingArticleCard__userIconArea">
        <UserIcon
          readTime={readTime}
          userIcon={userImage || userIcon}
          username={username}
          createdTime={createdTime}
        />
      </div>
      <div className="landingArticleCard__RatingIconArea">
        <RatingArticleCardComponent placeholderRating={rating} />
      </div>
    </div>
    <div className="landingArticleCard--textPart">
      <ArticleCardTextComponent
        description={description}
        title={title}
        claps={claps}
        slug={slug}
        views={views}
      />
    </div>
    <div>
      {report && (
      <div className="alert-danger" role="alert">
  Reported due to this reason:
        <b>{ `  ${report}` }</b>
      </div>
      )}
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
  slug: PropTypes.string,
  claps: PropTypes.number,
  rating: PropTypes.number,
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
  slug: '',
  claps: 0,
  rating: 0,
};

export default ArticleCard;
