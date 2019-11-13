import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

import {
  articleShareAction,
  fetchshare,
} from '../../redux/actions/shareArticle';

import './share.scss';

export class ShareArticle extends React.Component {
  handleClick = async (channel) => {
    if (!localStorage.getItem('token')) {
      this.props.history.push({
        pathname: '/login',
        state: { from: this.props.location },
      });
      return;
    }
    const { slug, title } = this.props.article;
    const action = await this.props.fetchshare(slug, channel);
    const { status } = action;
    const url = window.location.href;
    this.props.share(status, channel);
    const urls = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
      twitter: `https://twitter.com/intent/tweet?url=${url}`,
      mail: `mailto:?subject=${title}&body=${url}`,
    };
    if (status === 200 || status === 'success') {
      window.open(urls[channel], '_blank');
    } else {
      toast.error('sharing failed');
    }
  };

  render() {
    const { handleClick } = this;
    const icons = [
      { twitter: 'fab fa-twitter' },
      { facebook: 'fab fa-facebook-f' },
      { mail: 'share-mail fas fa-at' },
    ].map((icon) => (
      <button
        type="button"
        className="share"
        key={Object.keys(icon)[0]}
        onClick={() => handleClick(Object.keys(icon)[0])}
      >
        <i className={Object.values(icon)[0]} />
      </button>
    ));
    return <div className="share-icons">{icons}</div>;
  }
}
ShareArticle.propTypes = {
  fetchshare: PropTypes.func,
};

ShareArticle.defaultProps = {
  fetchshare,
};

const mapStateToProps = (store) => ({
  article: store.viewArticle.data,
});

export default withRouter(
  connect(mapStateToProps, { share: articleShareAction })(ShareArticle),
);
