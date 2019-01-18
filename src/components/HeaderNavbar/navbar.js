import React, { Component } from "react";
import history from '../../history';


class Navbar extends Component {  
  constructor(props) {
    super(props);
    this.state = {active: false}
    
    this.handleClick = this.handleClick.bind(this);
  }

  
  
  handleClick(source) {
    history.push(source)
    this.setState(state => ({
      active: !state.active
    }));

    
  }
  
  render() {
 

    return (
      <div className= 'navbar'>
        <div className="navbar-links">
          <a onClick = {() => this.handleClick('./') } className= {`navbar-links__home ${this.state.active ? 'active' : ''} ` }> Home </a>
          <a onClick ={() => this.handleClick('./meet-the-instructors')} className={`navbar-links__meet  ${this.state.active ? 'active' : ''}`} >Instructors </a>
          <a onClick ={() => this.handleClick('./kids')} className={`navbar-links__kids  ${this.state.active ? 'active' : ''}`} > Kids Program </a>
          <a onClick ={() => this.handleClick('./schedule')} className={`navbar-links__schedule  ${this.state.active ? 'active' : ''}`} > Schedule </a>
          <a onClick ={() => this.handleClick('./contact')} className={`navbar-links__contact  ${this.state.active ? 'active' : ''}`} > Contact </a>
          
        </div>
      </div>
    );
  }
}



export default Navbar;


// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {addClass: false}
//   }
//   toggle() {
//     this.setState({addClass: !this.state.addClass});
//   }
//   render() {
//     let boxClass = ["box"];
//     if(this.state.addClass) {
//       boxClass.push('green');
//     }
//     return(
//         <div className={boxClass.join(' ')} onClick={this.toggle.bind(this)}>{this.state.addClass ? "Remove a class" : "Add a class (click the box)"}<br />Read the tutorial <a href="http://www.automationfuel.com" target="_blank">here</a>.</div>       
//     );
//   }
// }
// ReactDOM.render(<App />, document.getElementById("root"));