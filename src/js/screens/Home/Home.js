import React from 'react';
import PropTypes from 'prop-types';
import '../../../styles/css/home.css';

const Home = ({ loggedIn }) => (
  <div className="Home">
    <h2 className="Home__header">{loggedIn ? 'Welcome' : 'Hello'}</h2>
    <p className="Home__p">Email: kenny@logs.in Password: password</p>
  </div>
);

Home.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
};
export default Home;
