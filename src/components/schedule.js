import React, {Component} from 'react';

class Schedule extends Component {
    render() {
        var spanStyle = {
            'text-decoration': 'underline'
        }
        return (
            <div className = 'schedule'>
                <h1> Schedule</h1>
                <img src = {require('../../static/assets/Grindhouse/schedule.png')}/>
                <p>Here at <span style = {spanStyle}> Grindhouse MMA </span> we offer classes for everyone. We have plenty of space with some of the best instructors around. Stop in today for your two week trial absolutely FREE!</p>
            </div>
        )
    }
}

export default Schedule;