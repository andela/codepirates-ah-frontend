import * as actionTypes from '../../actions/actionTypes';
import initialState from '../../store/initialState';

export default function profileReducer(state = initialState, action) {
  switch (action.type) {
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
    default:
      return state;
  }
}
