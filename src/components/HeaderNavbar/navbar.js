import React, { Component } from "react";

class Navbar extends Component {
  render() {
    const { className } = this.props;
    return (
      <div className={`${className} navbar`}>
        <div className="navbar-links">
          <a className="navbar-link__meet">Meet The Instructors </a>
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
