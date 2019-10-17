import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Controls = (props) => (
  <div id="actions">
    <button
      onClick={props.showWidget}
      required
      type="button"
      className="btn"
      id="cover"
    >
      cover photo
    </button>
    <button
      onClick={props.editmode ? props.handleSubmit : props.backToArticle}
      className="btn"
      type="button"
      id="submit"
    >
      {props.editmode === true ? 'Publish' : 'Article'}
    </button>
  </div>
);

Controls.propTypes = {
  showWidget: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  backToArticle: PropTypes.func.isRequired,
};

const mapState = (state) => ({ editmode: state.updateArticle.editmode });

export default connect(mapState)(Controls);
