import {
    SET_HOME_ANNOUNCEMENTS
} from '../actions/types';

const INITIAL_STATE = {
    announcements: []
}

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case SET_HOME_ANNOUNCEMENTS:
        const {announcements} = action.payload
        console.log(action.payload)
            return {
                ...state,
                announcements: action.payload
            }
    
        default:
            return state;
    }
}