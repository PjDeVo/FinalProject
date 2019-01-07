import React, { Component } from "react";
import Navbar from "./HeaderNavbar/navbar";
import Header from "./HeaderNavbar/header";

class Layout extends Component {
  render() {
    return (
      <div className="layout">
        {this.props.children}
        <Header />
        <Navbar className = 'navbar' />
      </div>
    );
  }
}

export default Layout;
