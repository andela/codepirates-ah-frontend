import React, { Component } from 'react';
import ProTypes from 'prop-types';
import style from './landingPageViewMoreArticles.scss';

export default class LandingPageViewMoreArticles extends Component {
  render() {
    const { buttonMessage, onClick } = this.props;
    return (
      <button
        type="button"
        onClick={onClick}
        className="ladingPageVieMoreArticlesButton"
        style={style}
      >
        {buttonMessage}
      </button>
    );
  }
}

LandingPageViewMoreArticles.propTypes = {
  buttonMessage: ProTypes.string,
  onClick: ProTypes.func,
};

LandingPageViewMoreArticles.defaultProps = {
  buttonMessage: '',
  onClick: () => {},
};
