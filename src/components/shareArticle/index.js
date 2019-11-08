import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import {
  articleShareAction,
  fetchshare,
} from '../../redux/actions/shareArticle';

import './share.scss';

export class ShareArticle extends React.Component {
  handleClick = async (channel) => {
    const { slug } = this.props;
    const action = await this.props.fetchshare(slug, channel);
    const { status } = action;
    this.props.share(status, channel);
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
  slug: store.viewArticle.data.slug,
});

export default connect(
  mapStateToProps,
  { share: articleShareAction },
)(ShareArticle);
