import React, { Component } from "react";

import Header from "./HeaderNavbar/header";
import Footer from "./HeaderNavbar/footer";
import NavigationContainer from "./HeaderNavbar/navigationContainer";

class Layout extends Component {
  render() {
    return (
      <div className="layout">
        {this.props.children}
        <Header  />
        <NavigationContainer />
        <Footer  />
      </div>
    );
  }
}

export default Layout;
