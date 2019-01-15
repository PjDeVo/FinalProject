import React, {Component} from 'react';
import {connect} from 'react-redux'
import * as actions from '../../actions'

class Announcements extends Component {
    

    componentWillMount() {
        this.props.setHomeAnnouncements()
    }
    
    render() {
        const {src} = this.props;
        return(
            
            
            <div className = 'announcements'>
                 {console.log("Props", this.props)}
                 
               {
                   this.props.announcements.map((announcement) => {
                       return (
                           <div className = 'announcements__articles'>
                                <div className = 'announcements__articles-imageUrl'>
                                     <img src = {announcement.imageUrl} />
                                </div>
                               <div className = 'announcements__articles-title'>
                                    {announcement.title}
                               </div>
                               <div className = 'announcements__articles-information'>
                                    {announcement.information}
                               </div>
                           </div>
                       )
                   })
               }    

            </div>
        )
    }
}

function mapStateToProps(state) {
    const {announcements} = state.homeAnnouncements;
    return{
        announcements
    }
}

Announcements = connect(mapStateToProps, actions)(Announcements)

export default Announcements;