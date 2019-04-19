import React, { Component } from "react";

import Header from "./HeaderNavbar/header"
import NavigationContainer from "./HeaderNavbar/navigationContainer";

class Layout extends Component {
  render() {
    return (
      <div className="layout">
        {this.props.children}
        <Header  />
        <NavigationContainer />
      
      </div>
    );
  }
}

export default Layout;
