import {
    SET_HOME_ANNOUNCEMENTS
}from './types.js'

export function setHomeAnnouncements() {
    return{
        type: SET_HOME_ANNOUNCEMENTS,
        payload: [ 
            {
                _id: 0,
                title: 'Title One',
                information: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur,'

            },
            {
                _id: 1,
                imageUrl: '//via.placeholder.com/100x100',
                title: 'Title Two',
                information: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur,'
            },
            {
                _id: 0,
                imageUrl: '//via.placeholder.com/100x100',
                title: 'Title Three',
                information: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur,'
            }
        ]
    }
}