import React, { Component } from "react";
import history from '../../history';

class Navbar extends Component {
  render() {

    return (
      <div className= 'navbar'>
        <div className="navbar-links">
        <a onClick ={() => history.push('./')} className="navbar-links__home"> Home </a>
          <a onClick ={() => history.push('./meet-the-instructors')} className="navbar-links__meet" >Instructors </a>
          <a onClick ={() => history.push('./kids')} className="navbar-links__kids"> Kids Program </a>
          <a onClick ={() => history.push('./meet-the-instructors')} className="navbar-links__schedule"> Schedule </a>
          <a onClick ={() => history.push('./meet-the-instructors')} className="navbar-links__contact"> Contact </a>
          
        </div>
      </div>
    );
  }
}



export default Navbar;
