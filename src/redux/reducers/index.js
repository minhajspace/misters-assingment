import { combineReducers } from 'redux';
import { signupReducer } from './signupReducer';
import { loginReducer } from './loginReducers';

export default combineReducers({
    signupReducer,
    loginReducer
});