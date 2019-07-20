import { combineReducers } from 'redux';
import auth from './auth';
import notification from './notification';
import createNotification from './createNotification';


const reducer = combineReducers({ auth, notification, createNotification });

export default reducer;
