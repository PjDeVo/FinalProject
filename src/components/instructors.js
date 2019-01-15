import React, {Component} from 'react';
import InstructorsLayout from './instructorsLayout';


class Instructors extends Component {
    render() {
        return(
            <div className = 'instructors-page'>
                <InstructorsLayout
                    className = 'instructors-page__james'
                    image = {require('./Grindhouse/james.jpg')}
                    title = 'James Booth'
                    content = 'It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
                />
                <InstructorsLayout 
                    className = 'instructors-page__matt'
                    image = {require('./Grindhouse/matt.jpg')}
                    title = 'Matty Matt'
                    content = 'It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
                />
                <InstructorsLayout
                    className = 'instructors-page__sean'
                    image = {require('./Grindhouse/sean.jpg')}
                    title = 'Sean Brady'
                    content = 'It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
                />
                <InstructorsLayout
                    className = 'instructors-page__pat'
                    image = {require('./Grindhouse/pat.jpg')}
                    title = 'Pat DeVincentis'
                    content = 'It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
                />

                <div className = 'instructors-page__images'>
                    <div >
                    <img className = 'instructors-page__images-image' src = {require ('./Grindhouse/gym.jpg')} /> 
                    </div>
                    
                    <div>
                    <img className = 'instructors-page__images-image' src = {require ('./Grindhouse/mma.jpg')} /> 
                    </div>

                    <div>
                    <img className = 'instructors-page__images-image' src = {require ('./Grindhouse/group.jpg')} /> 
                    </div>

                    <div>
                    <img className = 'instructors-page__images-image' src = {require ('./Grindhouse/killers.jpg')} /> 
                    </div> 
                    <div>
                    <img className = 'instructors-page__images-image' src = {require ('./Grindhouse/bjjgroup.jpg')} /> 
                    </div> 
                   
                    
                </div>
            </div>
        )
    }
}

export default Instructors;