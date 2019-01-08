import React, {Component} from 'react';

class HomeForm extends Component {
    
    render() {
        const {className, title, content, image} = this.props;
        return(
            <div className = {`${className} home-form`}>
                <h1 className = 'home-form__title'> {title} </h1>
                <img className = 'home-form__image' src = {image}/>
                <p className = 'home-form__content'> {content}</p>

            </div>
        )
    }
}

export default HomeForm;