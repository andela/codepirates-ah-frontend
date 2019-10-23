import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import classnames from 'classnames';
import commonStyle from '../common/common.scss';
import TextInput from '../common/textInput';
import SubmitButton from '../common/submitButton';
import OrLine from '../common/orLine';
import SwitchToSignupOrLogin from '../common/switchToSignupOrLogin';
import RegistrationHeader from '../common/registrationHeader';
import loginAction from '../../redux/actions/login';
import loginValidation from './loginValidation';
import signupSvgPath from '../../../public/assets/images/signupSvg.svg';
import SocialButtons from '../SocialButtons/SocialButton';

export class Login extends Component {
  state={
    username: '',
    password: '',
    error: '',
    loading: false,
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    this.setState((prevState) => ({ ...prevState, error: nextProps.message }));
  }

  onSubmit = (event) => {
    event.preventDefault();
    const re = /[A-Z0-9]+@[A-Z0-9-]+\.[A-Z]{2,4}/gim;
    const { username, password } = this.state;
    const isEmail = re.test(username);
    let formData = { password };
    if (isEmail) {
      formData = { ...formData, email: username };
    } else {
      formData = { ...formData, username };
    }
    const checkErrors = loginValidation(formData);
    if (checkErrors) {
      const errors = {};
      (checkErrors.details || []).forEach((err) => {
        errors[err.path[0]] = err.message.replace(/"/g, '');
      });
      const errorValue = Object.values(errors);
      this.setState((prevState) => ({ ...prevState, error: errorValue[0] }));
      return false;
    }
    this.setState((prevState) => ({ ...prevState, loading: true }));

    const { props } = this;
    props.loginAction(formData).then((res) => {
      if (res.payload.status !== 200) {
        this.setState({
          loading: false,
        });
      }
    });
    return this.setState({
      error: '',
    });
  }

  onChange = ({ target }) => {
    this.setState((prevState) => ({ ...prevState, error: '' }));
    const input = { [target.name]: target.value };
    this.setState((prevState) => ({ ...prevState, ...input }));
  }

  render() {
    const {
      username, password, error, loading,
    } = this.state;
    const { props } = this;
    if (props.status === 200) {
      return (
        <Redirect to={{
          pathname: '/',
          state: { message: props.message },
        }}
        />
      );
    }
    return (
      <div className="container registration" style={commonStyle}>
        <ToastContainer position={toast.POSITION.TOP_RIGHT} />
        <RegistrationHeader title="Login" />
        <div className="row registration--middle-row">
          <div className="col-md-7 registration--middle-row__left-part">
            <div className="registration__form-div">
              <form id="login-form" className={classnames('ui', 'form', { loading })} onSubmit={this.onSubmit}>
                <TextInput
                  type="text"
                  label="Username"
                  name="username"
                  value={username}
                  onChange={this.onChange}
                  error={error}
                />
                <TextInput type="password" label="Password" name="password" value={password} onChange={this.onChange} error={error} />
                <SubmitButton value="Login" />
              </form>
              <a href="/resetrequest">Forgot password ?</a>
            </div>
            <OrLine />
          </div>
          <div className="col-md-5 registration--middle-row__right-part">
            <div>
              <SocialButtons status="Login with" />
            </div>
            <SwitchToSignupOrLogin url="/signup" filePath={signupSvgPath} message="if you don't have an account!" />
          </div>
        </div>
        <div className="row registration-footer-row">
          <div className="col-md-12 registration--footer" />
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  loginAction: PropTypes.func,
  status: PropTypes.number,
  message: PropTypes.string,

};
Login.defaultProps = {
  status: 0,
  message: '',
  loginAction: () => {},
};
export const mapStateToProps = ({ user: { message, status, token } }) => ({
  message, status, token,
});
export default connect(mapStateToProps, { loginAction })(Login);
