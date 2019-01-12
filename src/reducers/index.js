import { combineReducers } from 'redux';
import {reducer as form} from 'redux-form'
import homeAnnouncements from './announcementsReducer';

const rootReducer = combineReducers({
  homeAnnouncements 
});

export default rootReducer;