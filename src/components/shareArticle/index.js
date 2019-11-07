import React from 'react';
import { connect } from 'react-redux';
import '../articles/createArticles/createArticles.scss';
import 'react-quill/dist/quill.snow.css';
import 'react-toastify/dist/ReactToastify.css';
import PropTypes from 'prop-types';

import { toast } from 'react-toastify';

import {
  articleShareAction,
  fetchshare,
} from '../../redux/actions/shareArticle';

import './share.scss';

export class ShareArticle extends React.Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       channel: '',
  //     };
  //   }

    handleClick = async (chan) => {
        console.log(window.location);
    const channel = chan === 'at' ? 'mail' : chan;
    const { slug } = this.props;
    // this.setState({ channel });
    const action = await this.props.fetchshare(slug, channel);
    console.log({ action });
    const { status } = action;
    this.props.share(status);
    toast.success(action);
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
        {/* <i className="fab fa-twitter" onClick={handleClick} />
        <i className="fab fa-facebook-f" onClick={handleClick} />
        <i className="fab fa-google" onClick={handleClick} /> */}
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
