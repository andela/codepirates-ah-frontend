import signupReducer from './signupReducer';
import login from './login';
import profileReducer from './profile/profileReducer';

export default {
  userRegistrationData: signupReducer,
  login,
  profileReducer,
};

import { combineReducers } from 'redux';
// import all reducers in this file
import socialAuthReducer from './socialAuth/socilaAuth';
import login from './login';


const rootReducer = combineReducers({
  socialAuthReducer,
  login,
  // this will include all imported reducers
});
export default rootReducer;
