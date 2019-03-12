import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

library.add(faBars)

class NavigationContainer extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      isExpanded: false
    }
  }

 handleToggle(e) {
  this.setState({
    isExpanded: !this.state.isExpanded
  })
 }

  render() {
    const {isExpanded} = this.state

    
    return (
      <div>
          <div className = 'hamburger-menu'>
                      <FontAwesomeIcon className ={`mobile-menu` } icon="bars" onClick = {(e) => this.handleToggle(e)} />
                  </div>

        <div className={`nav-wrapper ${isExpanded ? 'show' :  'hidden' }`}>
        

            <div className = 'nav-link-wrapper__home'>
              <NavLink exact to="/" activeClassName="nav-link-active">Home</NavLink>
            </div>
            <div className = 'nav-link-wrapper__meet'>
              <NavLink to="/meet-the-instructors" activeClassName="nav-link-active">Instructors</NavLink>
            </div>
            <div className = 'nav-link-wrapper__kids'>
              <NavLink to="/kids" activeClassName="nav-link-activFuture Champe">Kids</NavLink>
            </div>
            <div className = 'nav-link-wrapper__schedule'>
              <NavLink to="/schedule" activeClassName="nav-link-active">Schedule</NavLink>
            </div>
            <div className = 'nav-link-wrapper__contact'>
              <NavLink to="/contact" activeClassName="nav-link-active">Contact</NavLink>
            </div>

          
        </div>

      </div>
    );
  }
}

export default NavigationContainer; 