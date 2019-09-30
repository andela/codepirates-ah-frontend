import * as actions from '../actions/actionTypes';
import initialState from '../store/initialState';


const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.LOGIN_SUCCESS:
      return {
        ...state,
        ...action.payload,
        isLoggedIn: true,
      };
    case actions.LOGIN_ERROR:
      return {
        ...state,
        ...action.payload,
        isLoggedIn: false,
      };
    default:
      return state;
  }
};

export default loginReducer;
