import React, {Component} from 'react';

class KidsHome extends Component {
      render() {
      return (
        <div className = 'kids-home'>
          
          <h1> Grindhouse Future Champs</h1>
         
          <div className = 'kids-home__images'>
            <img className = 'kids-home__image' src = 'http://via.placeholder.com/300x300' />
            <img className = 'kids-home__image' src = 'http://via.placeholder.com/300x300' />
            <img className = 'kids-home__image' src = 'http://via.placeholder.com/300x300' />

          </div>

          <div className = 'kids-home__main-image'>
              <img  src = 'http://via.placeholder.com/600x300' />
          </div>
          
        </div>
      );
    }
  }
  

export default KidsHome;