import React, {Component} from 'react';
import InstructorsLayout from './instructorsLayout';

class Instructors extends Component {
    render() {
        return(
            <div className = 'instructors-page'>
                <InstructorsLayout
                    className = 'instructors-page__james'
                    image = 'http://via.placeholder.com/500x300'
                    title = 'James Booth'
                    content = 'It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
                />
                <InstructorsLayout 
                    className = 'instructors-page__matt'
                    image = 'http://via.placeholder.com/500x300'
                    title = 'Matty Matt'
                    content = 'It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
                />
                <InstructorsLayout
                    className = 'instructors-page__jerry'
                    image = 'http://via.placeholder.com/500x300'
                    title = 'Jerry'
                    content = 'It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
                />
                <InstructorsLayout
                    className = 'instructors-page__pat'
                    image = 'http://via.placeholder.com/500x300'
                    title = 'Pat'
                    content = 'It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
                />

                <div className = 'instructors-page__images'>
                    <div>
                    <img src = 'http://via.placeholder.com/200x200'/>
                    </div>
                    
                    <div>
                    <img src = 'http://via.placeholder.com/200x200'/>
                    </div>

                    <div>
                    <img src = 'http://via.placeholder.com/200x200'/>
                    </div>

                    <div>
                    <img src = 'http://via.placeholder.com/200x200'/>
                    </div> 
                    <div>
                    <img src = 'http://via.placeholder.com/200x200'/>
                    </div> 
                    <div>
                    <img src = 'http://via.placeholder.com/200x200'/>
                    </div> 
                    
                </div>
            </div>
        )
    }
}

export default Instructors;