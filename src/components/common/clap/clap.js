import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import jwt from 'jsonwebtoken';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as faRegular from '@fortawesome/free-regular-svg-icons';
import { Popup } from 'semantic-ui-react';
import {
  getClaps, updateClaps, cancelClaps,
} from '../../../redux/actions/like/fetchLike';
import './clap.scss';

export class Clap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      claps: 0,
      isArticleOwner: false,
    };
  }

  async componentDidMount() {
    const { getClaps: getAllClaps } = this.props;
    const token = localStorage.getItem('token');
    if (!token) return;
    const payload = jwt.decode(token);
    const { slug, username } = this.props;
    if (username === payload.username) this.setState({ isArticleOwner: true });
    await getAllClaps(slug, localStorage.getItem('token'));
    const { claps: allClaps } = this.props;
    this.setState({ claps: allClaps });
  }

  handleCancel = async () => {
    const { cancelClaps: cancelAllClaps, getClaps: getAllClaps } = this.props;
    const { slug } = this.props;
    await cancelAllClaps(slug);
    const currentClaps = await getAllClaps(slug);
    this.setState({ claps: currentClaps.total || 0 });
  }

  handleIncrement = async () => {
    if (!localStorage.getItem('token')) {
      this.props.history.push(
        {
          pathname: '/login',
          state: { from: this.props.location },
        },
      );
      return;
    }
    const { claps } = this.state;
    const { updateClaps: updateTotalCount } = this.props;
    const { slug } = this.props;
    const newClaps = await updateTotalCount(slug, claps);
    this.setState((prevState) => ({ claps: newClaps || prevState.claps }));
  }

  renderCancelBtn = (claps) => (claps > 0 ? (
    <Popup
      content="Unclap article"
      trigger={
        <FontAwesomeIcon icon={faRegular.faWindowClose} onClick={this.handleCancel} id="cancelClap" className="clapCancel" />
      }
    />
  ) : <p />);

  render() {
    const { claps, isArticleOwner } = this.state;
    return (
      <div className={`clapSection${isArticleOwner ? ' hide' : ''}`}>
        <div>
          {this.renderCancelBtn(claps)}
        </div>
        <div>
          <img onClick={this.handleIncrement} className={`clapIcon${!localStorage.getItem('token') ? ' inactive' : ''}`} alt="clap icon" width="10" height="10" />
        </div>
        <div>
          {localStorage.getItem('token') ? (<div className="clapAction badge badge-primary">{claps}</div>) : ''}
        </div>
      </div>
    );
  }
}

Clap.propTypes = {
  getClaps: PropTypes.func.isRequired,
  updateClaps: PropTypes.func.isRequired,
  cancelClaps: PropTypes.func.isRequired,
};

const mapStateToProps = ({ articleFeedback }) => ({
  clapPending: articleFeedback.clapPending,
  claps: articleFeedback.claps,
  clapError: articleFeedback.clapError,
});

export default withRouter(connect(mapStateToProps, {
  getClaps, updateClaps, cancelClaps,
})(Clap));
