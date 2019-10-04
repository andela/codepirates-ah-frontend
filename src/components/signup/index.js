import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { ToastContainer } from 'react-toastify';
import classnames from 'classnames';
import commonStyle from '../common/common.scss';
import TextInput from '../common/textInput';
import SubmitButton from '../common/submitButton';
import OrLine from '../common/orLine';
import RegistrationHeader from '../common/registrationHeader';
import { signupAction } from '../../redux/actions/signup/signupAction';
import SwitchToSignupOrLogin from '../common/switchToSignupOrLogin';
import signupSvgPath from '../../../public/assets/images/signupSvg.svg';

export class Signup extends Component {
    state={
      firstname: '',
      lastname: '',
      email: '',
      username: '',
      password: '',
      errors: {},
      loading: false,
    }

  onSubmit = (event) => {
    event.preventDefault();
    const { props } = this;
    // validation
    const {
      firstname, lastname, username, email, password,
    } = this.state;
    const errors = {};
    if (firstname === '') errors.firstname = "firstname can't be empty";
    if (lastname === '') errors.lastname = "lastname can't be empty";
    if (email === '') errors.email = "email can't be empty";
    if (username === '') errors.username = "username can't be empty";
    if (password === '') errors.password = "password can't be empty";
    this.setState({ errors });
    const isValid = Object.keys(errors).length === 0;
    if (isValid) {
      this.setState({ loading: true });
      props.signupAction(this.state).then((res) => {
        if (res.payload.status === 201) {
          const { history, message } = this.props;
          this.setState(
            {
              firstname: '',
              lastname: '',
              email: '',
              username: '',
              password: '',
              errors: {},
              loading: false,
            },
          );
          history.push({ pathname: '/', state: { message } });
        } else {
          const str = (res.payload.message).toLowerCase();
          if (str.search('firstname') !== -1) errors.firstname = res.payload.message;
          else if (str.search('lastname') !== -1) errors.lastname = res.payload.message;
          else if (str.search('username') !== -1) errors.username = res.payload.message;
          else if (str.search('email') !== -1) errors.email = res.payload.message;
          else if (str.search('password') !== -1) errors.password = res.payload.message;
          this.setState({ errors, loading: false });
        }
      });
    }
  }

  onChange =(e) => {
    const { errors } = this.state;
    if (errors[e.target.name]) {
      delete errors[e.target.name];
      this.setState({
        [e.target.name]: e.target.value,
        errors,
      });
    } else {
      this.setState({ [e.target.name]: e.target.value });
    }
  };

  render() {
    const {
      firstname, lastname, username, password, email, errors, loading,
    } = this.state;
    const style = {
      color: '#9f3a38',
    };
    return (
      <div className="container registration" style={commonStyle}>
        <ToastContainer />
        <RegistrationHeader title="Sign Up" />
        <div className="row registration--middle-row">
          <div className="col-md-6 registration--middle-row__left-part">
            <div className="registration__form-div">
              <form className={classnames('ui', 'form', { loading })} action="" onSubmit={this.onSubmit} id="signupForm">
                <div className={classnames('field', { error: errors.firstname })}>
                  <TextInput type="text" label="FirstName" name="firstname" value={firstname} onChange={this.onChange} id="firstname" />
                  <span style={style}>{errors.firstname}</span>
                </div>
                <div className={classnames('field', { error: !!errors.lastname })}>
                  <TextInput type="text" label="LastName" name="lastname" value={lastname} onChange={this.onChange} id="lastname" />
                  <span style={style}>{errors.lastname}</span>
                </div>
                <div className={classnames('field', { error: !!errors.email })}>
                  <TextInput type="text" label="Email" name="email" value={email} onChange={this.onChange} id="email" />
                  <span style={style}>{errors.email}</span>
                </div>
                <div className={classnames('field', { error: !!errors.username })}>
                  <TextInput type="text" label="Username" name="username" value={username} onChange={this.onChange} id="username" />
                  <span style={style}>{errors.username}</span>
                </div>
                <div className={classnames('field', { error: !!errors.password })}>
                  <TextInput type="password" label="Password" name="password" value={password} onChange={this.onChange} id="password" />
                  <span style={style}>{errors.password}</span>
                </div>
                <div className="field">
                  <SubmitButton value="Sign Up" />
                </div>

              </form>
            </div>
            <OrLine />
          </div>
          <div className="col-md-6 registration--middle-row__right-part">
            <div>
                        social signup buttons
            </div>
            <SwitchToSignupOrLogin url="/login" filePath={signupSvgPath} message="If you already have an account!" />
          </div>
        </div>
        <div className="row registration-footer-row">
          <div className="col-md-12 registration--footer" />
        </div>
      </div>
    );
  }
}

Signup.propTypes = {
  signupAction: PropTypes.func.isRequired,
  history: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired,
};
const mapStateToProps = ({ userRegistrationData: { message, status } }) => ({
  message, status,
});
export default connect(mapStateToProps, { signupAction })(Signup);
