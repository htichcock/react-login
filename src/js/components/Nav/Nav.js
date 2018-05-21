import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../../../styles/css/nav.css';

export default class Nav extends Component {
  static propTypes = {
    desktop: PropTypes.bool.isRequired,
  };
  constructor(props) {
    super(props);
    this.state = {
      active: false,
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ active: true });
    }, 100);
  }
  render() {
    return (
      <nav
        className={`Nav ${this.props.desktop ? 'Nav--desktop' : ''} ${
          this.state.active ? 'Nav--active' : ''
        }`}
      >
        <ul className="Nav__itemWrapper">
          <li className="Nav__item">
            <a href="#">Page1</a>
          </li>
          <li className="Nav__item">
            <a href="#">Page2</a>
          </li>
          <li className="Nav__item">
            <a href="#">Page3</a>
          </li>
          <li className="Nav__item">
            <a href="#">Page4</a>
          </li>
        </ul>
      </nav>
    );
  }
}
