import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { ToastContainer, toast } from 'react-toastify';
import commonStyle from '../common/common.scss';
import TextInput from '../common/TextInput';
import SubmitButton from '../common/SubmitButton';
import OrLine from '../common/OrLine';
import LoginSvg from './LoginSvg';
import RegistrationHeader from '../common/RegistrationHeader';
import loginAction from '../../redux/actions/login';
import loginValidation from './loginValidation';

class Login extends Component {
  state={
    usernameOrEmail: '',
    password: '',
  }


  componentWillReceiveProps(nextProps) {
    if (nextProps.status === 200) {
      nextProps.history.push('/');
    } else toast.error(nextProps.message);
  }

  onSubmit = (event) => {
    event.preventDefault();
    const re = /[A-Z0-9]+@[A-Z0-9-]+\.[A-Z]{2,4}/gim;
    const { usernameOrEmail, password } = this.state;
    const isEmail = re.test(usernameOrEmail);
    let formData = { password };
    if (isEmail) {
      formData = { ...formData, email: usernameOrEmail }; // added third parameter to check
    } else {
      formData = { ...formData, username: usernameOrEmail };
    }
    const checkErrors = loginValidation(formData);
    if (checkErrors) {
      return false;
    }
    const { props } = this;
    props.loginAction(formData);
    return this.setState({
      usernameOrEmail: '',
      password: '',
    });
  }

  onChange = ({ target }) => {
    const input = { [target.name]: target.value };
    this.setState((prevState) => ({ ...prevState, ...input }));
  }

  render() {
    const { usernameOrEmail, password } = this.state;
    return (
      <div className="container registration" style={commonStyle}>
        <ToastContainer position={toast.POSITION.TOP_RIGHT} />
        <RegistrationHeader title="Login" />
        <div className="row registration--middle-row">
          <div className="col-md-6 registration--middle-row__left-part">
            <div className="registration__form-div">
              <form action="" onSubmit={this.onSubmit}>
                <TextInput type="text" label="Username" name="usernameOrEmail" value={usernameOrEmail} onChange={this.onChange} />
                <TextInput type="password" label="Passwoard" name="password" value={password} onChange={this.onChange} />
                <SubmitButton value="Login" />
              </form>
              <a href="/">Forgot password ?</a>
            </div>
            <OrLine />
          </div>
          <div className="col-md-6 registration--middle-row__right-part">
            <div>
                        social login buttons
            </div>
            <LoginSvg />
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
  loginAction: PropTypes.func.isRequired,
  message: PropTypes.string,
  status: PropTypes.number,
  history: PropTypes.instanceOf(Object).isRequired,
};
Login.defaultProps = {
  message: '',
  status: 0,
};
const mapStateToProps = ({ login: { message, status, token } }) => ({
  message, status, token,
});
export default connect(mapStateToProps, { loginAction })(Login);
