import React, {Component} from 'react';
import HomeForm from './homeForm';
import Announcements from './announcements';
import Footer from '../HeaderNavbar/footer';

class Home extends Component {

   
    render() {
        return(
            <div className = 'home'>
                <img src = 'http://via.placeholder.com/1200x200' className = 'home__image'/> 
                <HomeForm 
                    className ={'home__form-bjj'}
                    title = {'Brazilian Jiu Jitsu'} 
                    content = {" Here is the content for the BJJ description on the homepage Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. "}
                    image = { 'http://via.placeholder.com/300x300'}
                 />
                <HomeForm 
                    className ={'home__form-thai'}
                    title = {'Muay Thai'} 
                    content = {" Here is the content for the Muay Thai description on the homepage Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. "}
                    image = { 'http://via.placeholder.com/300x300'}
                 />

                 <h1 className = 'announcements-header'>Announcements</h1>

                 <Announcements/>

            </div>
                        
        )

    }
}

export default Home; 