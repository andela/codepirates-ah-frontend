import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Card } from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import * as fechMybookmark from '../../redux/actions/bookmark/fetchBookmark';

export const Tags = (props) => {
  const [myBookmarks, setBookmarks] = useState([]);
  const [loading, setLoading] = useState(true);
  const { bookmarks, actions, isSuccess } = props;
  useEffect(() => {
    actions.fechMybookmark();
  }, []);
  useEffect(() => {
    if (isSuccess === 'success') {
      setBookmarks(bookmarks);
      setLoading(false);
    }
    if (isSuccess === 'fail') {
      window.location.replace('/');
    }
  }, [props.setBookmarks, props.isSuccess]);

  if (loading) {
    return (
      <p>
        Loading...
      </p>
    );
  }
  return myBookmarks.map((bookmark) => {
    if (bookmarks.length === 0) {
      window.location.replace('/');
      return false;
    }
    if (!bookmark.article) return false;
    return (
      <div
        className="container"
        key={bookmark.id}
        href={`/article/${bookmark.article.slug}`}
      >
        <Card>
          <Card.Body>
            <Card.Title style={{ cursor: 'pointer' }} as="a" href={`/article/${bookmark.article.slug}`}>{bookmark.article.title}</Card.Title>
            <Card.Text>
              {bookmark.article.description.length > 70 ? `${bookmark.article.description.substring(0, 70)} ...` : bookmark.article.description}
            </Card.Text>
            <Card.Subtitle className="mb-2 text-muted">{bookmark.article.readtime}</Card.Subtitle>
            <Card.Subtitle className="mb-2 text-muted">{bookmark.article.timeCreated}</Card.Subtitle>
            <Card.Link href={`/profile/${bookmark.article.author.username}`}>{bookmark.article.author.username}</Card.Link>
          </Card.Body>
        </Card>
      </div>
    );
  });
};

Tags.propTypes = {
  actions: PropTypes.object.isRequired,
  bookmarks: PropTypes.array,
  isSuccess: PropTypes.string,
};

const mapStateToProps = ({ bookmark }) => ({
  bookmarks: bookmark.myBookmarks,
  isSuccess: bookmark.myBookmarkSuccess,
});
export const mapDispatchToProps = (dispatch) => ({
  actions: {
    fechMybookmark: bindActionCreators(fechMybookmark.fechMybookmark, dispatch),
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(Tags);
