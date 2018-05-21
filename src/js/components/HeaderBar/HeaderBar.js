import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../../../styles/css/headerBar.css';
import 'font-awesome/css/font-awesome.min.css';

import LoginForm from '../LoginForm';
import Nav from '../Nav';

export default class HeaderBar extends Component {
  static propTypes = {
    desktop: PropTypes.bool.isRequired,
  };
  constructor(props) {
    super(props);
    this.state = {
      loginActive: false,
      navActive: false,
    };
    this.clearLogin = this.clearLogin.bind(this);
  }

  clearLogin() {
    this.setState({ loginActive: false });
  }

  toggleLogin() {
    this.setState({
      loginActive: !this.state.loginActive,
      navActive: false,
    });
  }

  toggleNav() {
    this.setState({
      navActive: !this.state.navActive,
      loginActive: false,
    });
  }

  render() {
    return this.props.desktop ? (
      <div
        className={`HeaderBar HeaderBar--desktop ${
          this.state.loginActive ? 'HeaderBar--loginActive' : ''
        } ${this.state.navActive ? 'HeaderBar--navActive' : ''}`}
      >
        {this.state.navActive ? (
          <div className="HeaderBar__navBtnWrapper">
            <Nav desktop />
            <button
              onClick={e => {
                e.preventDefault();
                this.toggleNav();
              }}
              className="HeaderBar__navBtn"
            >
              close
            </button>
          </div>
        ) : (
          <div className="HeaderBar__navBtnWrapper">
            <button
              onClick={e => {
                e.preventDefault();
                this.toggleNav();
              }}
              className="HeaderBar__navBtn"
            >
              menu
            </button>
          </div>
        )}
        <h1 className="HeaderBar__titleP">
          {'React'} <span className="HeaderBar__titleS"> Login </span>
        </h1>

        {this.props.loggedIn ? (
          <div className="HeaderBar__helloWrapper">
            <div className="HeaderBar__hello">Hello, Kenny</div>
          </div>
        ) : this.state.loginActive ? (
          <div className="HeaderBar__loginBtnWrapper">
            <button
              onClick={e => {
                e.preventDefault();
                this.toggleLogin();
              }}
              className="HeaderBar__loginBtn"
            >
              close
            </button>
            {!this.props.loggedIn && (
              <LoginForm clearLogin={this.clearLogin} desktop login={this.props.login} />
            )}
          </div>
        ) : (
          <div className="HeaderBar__loginBtnWrapper">
            <button
              onClick={e => {
                e.preventDefault();
                this.toggleLogin();
              }}
              className="HeaderBar__loginBtn"
            >
              login
            </button>
          </div>
        )}
      </div>
    ) : (
      <div>
        <div className="HeaderBar">
          {this.state.navActive ? (
            <button
              className="HeaderBar__navBtn"
              onClick={e => {
                e.preventDefault();
                this.toggleNav();
              }}
            >
              <i className="fa fa-angle-up" />
            </button>
          ) : (
            <button
              onClick={e => {
                e.preventDefault();
                this.toggleNav();
              }}
              className="HeaderBar__navBtn"
            >
              <i className="fa fa-angle-down" />
            </button>
          )}
          <h1 className="HeaderBar__titleP">
            React <span className="HeaderBar__titleS"> Login </span>
          </h1>
          {this.props.loggedIn ? (
            <div className="HeaderBar__helloWrapper">
              <div className="HeaderBar__hello">Hello, Kenny</div>
            </div>
          ) : this.state.loginActive ? (
            <div className="HeaderBar__loginBtnWrapper">
              <button
                className="HeaderBar__loginBtn"
                onClick={e => {
                  e.preventDefault();
                  this.toggleLogin();
                }}
              >
                close
              </button>
            </div>
          ) : (
            <div className="HeaderBar__loginBtnWrapper">
              <button
                className="HeaderBar__loginBtn"
                onClick={e => {
                  e.preventDefault();
                  this.toggleLogin();
                }}
              >
                login
              </button>
            </div>
          )}
        </div>
        {this.state.loginActive &&
          !this.props.loggedIn && (
            <div className="HeaderBar__loginWrapper">
              <LoginForm desktop={false} login={this.props.login} clearLogin={this.clearLogin} />
            </div>
          )}
        {this.state.navActive && <Nav desktop={false} />}
      </div>
    );
  }
}
