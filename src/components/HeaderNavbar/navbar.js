import React, { Component } from "react";
import history from '../../history';

class Navbar extends Component {
  render() {

    return (
      <div className= 'navbar'>
        <div className="navbar-links">
          <a onClick ={() => history.push('./meet-the-instructors')} className="navbar-link__meet" >Meet The Instructors </a>
          <a className="navbar-link__classes"> Classes </a>
          <a className="navbar-link__kids"> Kids Program </a>
          <a className="navbar-link__schedule"> Schedule </a>
          <a className="navbar-link__contact"> Contact </a>
        </div>
      </div>
    );
  }
}

export default Navbar;
