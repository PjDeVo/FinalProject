import React, {Component} from 'react';

import history from '../../history';
class Header extends Component {
    render() {
        return(
            <div className = 'header'>
                <img className = 'header__image' onClick ={()=> history.push('./')} src = '../../../src/style/images/Grindhouse/jerry.jpg'/>
            </div> 
            
        )
    }
}

export default Header;

