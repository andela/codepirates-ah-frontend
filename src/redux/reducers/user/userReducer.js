import * as actionTypes from '../../actions/actionTypes';
import initialState from '../../store/initialState';

const randomSpaces = (min = 1, max = 100) => {
  const randomNumber = Math.floor(Math.random() * (max - min)) + min;
  let spaces = ' ';
  for (let i = 0; i < randomNumber; i += 1) {
    spaces += ' ';
  }
  return spaces;
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GOOGLE_AUTH_FAIL:
      return { ...state, isLoggedIn: false };
    case actionTypes.FACEBOOK_AUTH_FAIL:
      return { ...state, isLoggedIn: false };
    case actionTypes.TWITTER_AUTH_FAIL:
      return { ...state, isLoggedIn: false };
    case actionTypes.GOOGLE_AUTH_SUCCESS:
      return { ...state, profile: action.profile, isLoggedIn: true };
    case actionTypes.FACEBOOK_AUTH_SUCCESS:
      return { ...state, profile: action.profile, isLoggedIn: true };
    case actionTypes.TWITTER_AUTH_SUCCESS:
      return { ...state, profile: action.profile, isLoggedIn: true };
    case actionTypes.FETCH_PROFILE_PENDING:
      return { ...state, profilePending: true };
    case actionTypes.FETCH_PROFILE_SUCCESS:
      return { ...state, profilePending: false, profile: action.profile };
    case actionTypes.FETCH_PROFILE_ERROR:
      return { ...state, profilePending: false, profileError: action.error };
    case actionTypes.UPDATE_PROFILE_PENDING:
      return { ...state, profilePending: true };
    case actionTypes.UPDATE_PROFILE_SUCCESS:
      return { ...state, profilePending: false, profile: action.profile };
    case actionTypes.UPDATE_PROFILE_ERROR:
      return { ...state, profilePending: false, profileError: action.error };
    case actionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        ...action.payload,
        isLoggedIn: true,
      };
    case actionTypes.LOGIN_ERROR:
      return {
        ...state,
        ...action.payload,
        message: `${action.payload.message}${randomSpaces()}`,
        isLoggedIn: false,
      };
    default:
      return state;
  }
};
export default userReducer;
