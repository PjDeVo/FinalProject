import React, {Component} from 'react';

class InstructorsLayout extends Component {
    render() {
            const {className, title, content, image} = this.props;
        return(
            <div className = {`${className} instructors-layout`}>
                <img className = 'instructors-layout__image' src = {image}/>
                <h1 className = 'instructors-layout__title'> {title} </h1>
                <p className = 'instructors-layout__content'> {content}</p>

            </div>
        )
    }
}

export default InstructorsLayout;