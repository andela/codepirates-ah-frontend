import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Card, Button } from 'react-bootstrap';
import { fechMybookmark } from '../../redux/actions/bookmark/bookmark';

export const Bookmark = (props) => {
  const [loading, setShow] = useState(true);
  const { bookmarks, fechMybookmark, } = props;
  const { myBookmarks } = bookmarks;
  // const {
  //   description, slug, author, title, timeCreated, readtime,
  // } = myBookmarks.article;
  useEffect(() => {
    fechMybookmark();
  }, []);
  useEffect(() => {
    const { bookmarks } = props;
    setShow(!loading);
    // console.log('>>>>', bookmarks);
  }, []);

  if (loading) return (<p />);
  return (

    myBookmarks.map((bookmark) => (
      <a
        key={bookmark && bookmark.article.slug}
        href={`/article/${article
          && article.slug}`}
      >
        <Card>
          <Card.Body>
            <Card.Title href={`/articles/${slug}`}>{title}</Card.Title>
            <Card.Text>
              {description.length > 70 ? `${description.substring(0, 70)} ...` : description}
            </Card.Text>
            <Card.Subtitle className="mb-2 text-muted">{readtime}</Card.Subtitle>
            <Card.Subtitle className="mb-2 text-muted">{timeCreated}</Card.Subtitle>
            <Card.Link href={`/profile/${author.username}`}>{author.username}</Card.Link>
            <Button variant="primary">remove</Button>
          </Card.Body>
        </Card>
      </a>
    )));
};

Bookmark.propTypes = {
  fechbookmark: PropTypes.func,
  bookmarks: PropTypes.object,
};
Bookmark.defaultProps = {
  bookmarks: null,
  loading: true,
};

const mapStateToProps = (state) => ({
  bookmarks: state.bookmarks.myBookmarks,
});

export default connect(
  mapStateToProps,
  { fechMybookmark },
)(Bookmark);
