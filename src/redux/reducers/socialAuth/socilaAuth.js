import * as actionsTypes from '../../actions/actionTypes';
import updateObject from '../../../components/helpers/store/util';

const initialState = {
  isAuthenticated: null,
  error: null,
  newUser: null,
  isLoading: null,
};

/**
 * @description - Dispatches when social authentication fail
 * @param {object} state
 * @returns {object} - An updated state
 */
const socialAuthFail = (state) => (
  updateObject(state, {
    isLoading: false,
    isAuthenticated: false,
  })
);

/**
 * @description - Dispatches when social authentication is successful
 * @param {object} state
 * @param {object} action
 * @returns {object} - An updated state
 */
const socialAuthSuccess = (state, action) => (
  updateObject(state, {
    isLoading: false,
    isAuthenticated: true,
    newUser: action.newUser,
  })
);
/**
 * @description - Dispatches when social authentication is loading
 * @param {object} state
 * @param {object} action
 * @returns {object} - An updated state
 */
const socialAuthLoading = (state) => (
  updateObject(state, {
    isAuthenticated: false,
    isLoading: true,
  })
);

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionsTypes.GOOGLE_AUTH_FAIL:
      return socialAuthFail(state, action);
    case actionsTypes.FACEBOOK_AUTH_FAIL:
      return socialAuthFail(state, action);
    case actionsTypes.TWITTER_AUTH_FAIL:
      return socialAuthFail(state, action);
    case actionsTypes.GOOGLE_AUTH_SUCCESS:
      return socialAuthSuccess(state, action);
    case actionsTypes.FACEBOOK_AUTH_SUCCESS:
      return socialAuthSuccess(state, action);
    case actionsTypes.TWITTER_AUTH_SUCCESS:
      return socialAuthSuccess(state, action);
    case actionsTypes.SOCIAL_AUTH_LOADING:
      return socialAuthLoading(state, action);
    default:
      return state;
  }
};

export default reducer;
