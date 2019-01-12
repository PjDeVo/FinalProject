import React, { Component } from "react";
import Navbar from "./HeaderNavbar/navbar";
import Header from "./HeaderNavbar/header";
import Footer from "./HeaderNavbar/footer";

class Layout extends Component {
  render() {
    return (
      <div className="layout">
        {this.props.children}
        <Header  />
        <Navbar  />
        <Footer />
      </div>
    );
  }
}

export default Layout;
