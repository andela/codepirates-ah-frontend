import React from 'react';
import { connect } from 'react-redux';
import '../articles/createArticles/createArticles.scss';
import 'react-quill/dist/quill.snow.css';
import 'react-toastify/dist/ReactToastify.css';
import PropTypes from 'prop-types';

import {
  articleShareAction,
  fetchshare,
} from '../../redux/actions/shareArticle';

import './share.scss';

export class ShareArticle extends React.Component {
    handleClick = async (chan) => {
      const channel = chan === 'at' ? 'mail' : chan;
      const { slug } = this.props;
      const action = await this.props.fetchshare(slug, channel);
      const { status } = action;
      this.props.share(status);
    };

    render() {
      const { handleClick } = this;
      const icons = [
        'fab fa-twitter',
        'fab fa-facebook-f',
        'fas fa-at',
      ].map((icon) => (
        <button
          type="button"
          className="share"
          key={icon.split('-')[1]}
          onClick={() => handleClick(icon.split('-')[1])}
        >
          <i className={icon} />
        </button>
      ));
      return (
        <div className="share-icons">
          {icons}
        </div>
      );
    }
}
ShareArticle.propTypes = {
  fetchshare: PropTypes.func,
};

ShareArticle.defaultProps = {
  fetchshare,
};

const mapStateToProps = (state) => ({
  slug: state.viewArticle.data.slug,
});

export default connect(
  mapStateToProps,
  { share: articleShareAction },
)(ShareArticle);
