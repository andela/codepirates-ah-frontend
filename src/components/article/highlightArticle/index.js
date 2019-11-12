import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { createHighlightAction } from '../../../redux/actions/highlight';

import cursorIndexFrom from '../../../helpers/cursorOffset';

class HighlighArticle extends Component {
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
    const { slug, createHighlightAction } = this.props;
    const { start, end } = this.state;
    await createHighlightAction(slug, start, end);
    document.querySelector('#highlightActions').style.display = 'none';
  };

  selectContent = () => {
    const body = document.querySelector('.article-paragraph');
    const ctrl = document.querySelector('#highlightActions');
    ctrl.style.display = 'block';
    this.setState(cursorIndexFrom(body));
    console.log('sss', this.state);
  };

  render() {
    const { top, left } = this.state;
    console.log({ top });
    return (
      <div
        id="highlightActions"
        style={{
          position: 'absolute',
          top: '50vh',
          left: '50vw',
          transform: 'translate(-50%, -50%)',
          display: 'none',
          width: '20vw',
          height: '20vh',
          background: 'grey',
        }}
      >
        <button type="button" onClick={this.handleSubmit}>
          create highlight?
        </button>
      </div>
    );
  }
}

HighlighArticle.propTypes = {
  createHighlightAction: PropTypes.func,
  slug: PropTypes.string,
};

HighlighArticle.defaultProps = {
  createHighlightAction: null,
  slug: '',
};

const mapState = (state) => ({ slug: state.viewArticle.data.slug });

export default connect(
  mapState,
  { createHighlightAction },
)(HighlighArticle);
