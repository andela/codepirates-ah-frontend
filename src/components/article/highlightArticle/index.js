/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { createHighlightAction } from '../../../redux/actions/highlight';

import cursorIndexFrom from '../../../helpers/cursorOffset';

import './styles.scss';

export class HighlightArticle extends Component {
  constructor() {
    super();
    this.state = {
      start: '',
      end: '',
      top: '',
      left: '',
    };
  }

  componentDidMount = () => {
    const body = document.querySelector('.article-paragraph');
    body.onmouseup = () => this.selectContent();
  };

  handleSubmit = async () => {
    if (!localStorage.getItem('token')) {
      this.props.history.push({
        pathname: '/login',
        state: { from: this.props.location },
      });
      return;
    }
    const { slug, createHighlightAction } = this.props;
    const { start, end } = this.state;
    await createHighlightAction(slug, start, end);
    document.querySelector('#highlightActions').style.display = 'none';
    window.location.replace(`/article/${slug}`);
  };

  selectContent = () => {
    const body = document.querySelector('.article-paragraph');
    const ctrl = document.querySelector('#highlightActions');
    ctrl.style.display = 'block';
    this.setState(cursorIndexFrom(body));
  };

  render() {
    const { top, left } = this.state;
    return (
      <div
        id="highlightActions"
        style={{
          top,
          left,
          transform: 'translate(-120%, -200%)',
          display: 'none',
          background: 'grey',
        }}
      >
        <button
          type="button"
          className="highlightActions"
          onClick={this.handleSubmit}
        >
          create highlight?
        </button>
        <button
          type="button"
          className="highlightActions"
          onClick={this.handleSubmit}
        >
          share highlight?
        </button>
        <button
          type="button"
          className="highlightActions"
          onClick={this.handleSubmit}
        >
          comment on highlight?
        </button>
      </div>
    );
  }
}

HighlightArticle.propTypes = {
  createHighlightAction: PropTypes.func,
  slug: PropTypes.string,
};

HighlightArticle.defaultProps = {
  createHighlightAction: null,
  slug: '',
};

const mapState = (state) => ({ slug: state.viewArticle.data.slug });

export default withRouter(
  connect(mapState, { createHighlightAction })(HighlightArticle),
);
