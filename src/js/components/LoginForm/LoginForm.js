import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ValidatedTextInput from '../ValidatedTextInput';

import '../../../styles/css/loginForm.css';

export default class LoginForm extends Component {
  static propTypes = {
    desktop: PropTypes.bool.isRequired,
    login: PropTypes.func.isRequired,
    clearLogin: PropTypes.func.isRequired
  };
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      emailErr: '',
      password: '',
      passwordErr: '',
      active: false,
    };
    this.updateEmail = this.updateEmail.bind(this);
    this.checkEmail = this.checkEmail.bind(this);
    this.updatePassword = this.updatePassword.bind(this);
    this.checkPassword = this.checkPassword.bind(this);
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ active: true });
    }, 100);
  }

  updateEmail(val) {
    this.setState({
      email: val,
    });
  }

  checkLogin(email, pass) {
    if (email.toLowerCase() === 'kenny@logs.in' && pass === 'password') {
      this.props.login();
      this.props.clearLogin();
    } else {
      this.setState({
        emailErr: 'The email and/or password is incorrect, please try again.',
        passwordErr: '',
      });
    }
  }

  checkEmail(val) {
    if (!val) {
      this.setState({
        emailErr: 'The email used to create this account is required to login',
      });
      return;
    }
    /* eslint-disable */
    if (
      !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        String(val).toLowerCase(),
      )
    ) {
      this.setState({
        emailErr: 'Invalid email. Please enter a valid email.',
      });
      return;
    }
    /* eslint-enable */
    this.setState({
      emailErr: '',
    });
  }

  updatePassword(val) {
    this.setState({
      password: val,
    });
  }

  checkPassword(val) {
    if (!val) {
      this.setState({
        passwordErr: 'Your account password is required.',
      });
      return;
    }
    if (val.length < 6) {
      this.setState({
        passwordErr: 'Password must be at least 6 characters',
      });
      return;
    }
    this.setState({ passwordErr: '' });
  }

  render() {
    return (
      <form
        className={`LoginForm ${this.props.desktop ? 'LoginForm--desktop' : ''} ${
          this.state.active ? 'LoginForm--active' : ''
        }`}
        onSubmit={e => {
          e.preventDefault();
          const email = document.getElementById('header-login-email').value;
          const password = document.getElementById('header-login-password').value;
          this.checkEmail(email);
          this.checkPassword(password);
          setTimeout(() => {
            if (!this.state.emailErr && !this.state.passwordErr) this.checkLogin(email, password);
          }, 300);
        }}
      >
        <ValidatedTextInput
          placeholder="email"
          type="email"
          inputID="header-login-email"
          value={this.state.email}
          error={this.state.emailErr}
          update={this.updateEmail}
          check={this.checkEmail}
          desktop={this.props.desktop}
        />
        <ValidatedTextInput
          placeholder="password"
          type="password"
          inputID="header-login-password"
          value={this.state.password}
          error={this.state.passwordErr}
          update={this.updatePassword}
          check={this.checkPassword}
          desktop={this.props.desktop}
        />
        <input className="LoginForm__submit" type="submit" value="login" />
      </form>
    );
  }
}
