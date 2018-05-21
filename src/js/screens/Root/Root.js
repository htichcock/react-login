import React, { Component } from 'react';

import HeaderBar from '../../components/HeaderBar';
import Home from '../Home';

export default class Root extends Component {
  constructor(props) {
    super(props);
    this.state = {
      desktop: false,
      loggedIn: false,
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    this.login = this.login.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({
      desktop: !!(window.innerWidth >= 1000),
    });
  }

  login() {
    this.setState({ loggedIn: true });
  }

  render() {
    return (
      <div>
        <HeaderBar loggedIn={this.state.loggedIn} login={this.login} desktop={this.state.desktop} />
        <Home loggedIn={this.state.loggedIn} />
      </div>
    );
  }
}
