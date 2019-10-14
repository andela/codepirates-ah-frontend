import * as actions from '../../actions/actionTypes';
import initialState from '../../store/initialState';


const signupReducer = (state = initialState.userRegistrationData, action) => {
  switch (action.type) {
    case actions.SIGNUP_SUCCESS:
      return {
        ...state,
        ...action.payload,
        isRegistered: true,
      };
    case actions.SIGNUP_ERROR:
      return {
        ...state,
        ...action.payload,
        isRegistered: false,
      };
    default:
      return state;
  }
};

export default signupReducer;
