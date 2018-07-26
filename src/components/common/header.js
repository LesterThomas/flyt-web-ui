import React, { Component } from 'react';
import Router, { Link } from 'react-router';


class Header extends Component {

  render() {
		return (
        <nav className="navbar navbar-default">
          <div className="container-fluid">
              <Link to="app" className="navbar-brand">
                <img src="images/img_vodafone_icon.png" />
              </Link>
              <ul className="nav navbar-nav">
                <li><Link to="app">Home</Link></li>
                <li><Link to="droneControl">Drone Control</Link></li>
                <li><Link to="apiLocation">API Location</Link></li>
                <li><Link to="about">About</Link></li>
              </ul>
          </div>
        </nav>
		);
	}
}

module.exports = Header;
