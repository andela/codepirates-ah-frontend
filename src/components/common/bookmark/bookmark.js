import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import * as faRegular from '@fortawesome/free-regular-svg-icons';
import { Popup } from 'semantic-ui-react';
import { createBookmark, deleteBookmark } from '../../../redux/actions/bookmark/fetchBookmark';
import './bookmark.scss';

export class Bookmark extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isBookmarked: false,
    };
  }

  componentDidMount() {
    const { slug } = this.props;
    if (localStorage.getItem(slug) === 'isBookmarked') this.setState({ isBookmarked: true });
  }

  handleClick = async () => {
    if (!localStorage.getItem('token')) {
      this.props.history.push(
        {
          pathname: '/login',
          state: { from: this.props.location },
        },
      );
      return;
    }
    const {
      articleId, slug, createBookmark: bookmark, deleteBookmark: unbookmark,
    } = this.props;
    const { isBookmarked } = this.state;
    if (!isBookmarked) {
      await bookmark(articleId, slug);
      this.setState({ isBookmarked: true });
      return;
    }
    await unbookmark(slug);
    this.setState({ isBookmarked: false });
  }

  render() {
    const { isBookmarked } = this.state;
    return (
      <Popup
        content={isBookmarked ? 'Remove from bookmarks' : 'Add to your bookmarks'}
        trigger={
          <FontAwesomeIcon onClick={this.handleClick} className="bookmark" icon={!isBookmarked ? faRegular.faBookmark : faBookmark} />
      }
      />
    );
  }
}
const mapStateToProps = ({ bookmark }) => ({
  error: bookmark.bookmarkError,
  bookmark: bookmark.bookmarkStatus,
  loading: bookmark.bookmarkPending,
});
export default withRouter(connect(mapStateToProps, { createBookmark, deleteBookmark })(Bookmark));
