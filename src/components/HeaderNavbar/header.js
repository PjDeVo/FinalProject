import React, {Component} from 'react';

import history from '../../history';



class Header extends Component {
    render() {
        return(
            <div className = 'header'>
               
                <img className = 'header__image' onClick ={()=> history.push('./')} src = {require('../../../static/assets/Grindhouse/logo18a-sm.png')}/>
            </div> 
            
        )
    }
}

export default Header;


