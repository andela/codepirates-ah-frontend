import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Request from './requestform';
import Reset from './resetform';

import resetPasswordAction, {
  fetchData,
} from '../../redux/actions/passwordreset';
import './progressanimation.css';

/**
 * @class - Password reset container Component
 * @param {object} props
 * @returns {JSX} - Social Button JSX template
 */
export class ResetRequest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      progress: '',
      email: '',
      password: '',
      confirmPassword: '',
      token: '',
    };
  }

  componentDidMount = () => this.setState({
    token: new URLSearchParams(this.props.location.search).get('token'),
  });

  handleSubmit = async (event) => {
    event.preventDefault();
    this.setState({ progress: 'loading' });
    const { history, resetPassword, fetchPassword } = this.props;
    const promise = await fetchPassword(this.state);
    await resetPassword(this.state, promise);
    this.setState({ progress: '' });
    if (!this.props.error) {
      history.push('/response');
    }
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { handleSubmit, handleChange } = this;
    const { location, error } = this.props;
    const form = !location.search ? (
      <Request
        handleSubmit={handleSubmit}
        error={error}
        handleChange={handleChange}
        email={this.state.email}
      />
    ) : (
      <Reset
        handleSubmit={handleSubmit}
        error={error}
        handleChange={handleChange}
        pass={this.state.password}
        confirm={this.state.confirmPassword}
      />
    );
    return (
      <div className="container styles">
        <div className={this.state.progress} />
        {form}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  error: state.passwordReset.error,
});

ResetRequest.propTypes = {
  resetPassword: PropTypes.func.isRequired,
  location: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  fetchPassword: PropTypes.func,
  error: PropTypes.string,
};

ResetRequest.defaultProps = {
  error: '',
  fetchPassword: fetchData,
};

export default connect(
  mapStateToProps,
  { resetPassword: resetPasswordAction },
)(ResetRequest);
