import React, {Component} from 'react';

import history from '../../history';

class Header extends Component {
    render() {
        return(
            <div className = 'header'>
                <img className = 'header__image' onClick ={()=> history.push('./')} src = 'http://via.placeholder.com/100x100'/>
            </div> 
            
        )
    }
}

export default Header;

