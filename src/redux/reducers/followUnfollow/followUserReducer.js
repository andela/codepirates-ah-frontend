import * as actionTypes from '../../actions/actionTypes';
import initialState from '../../store/initialState';

export const FollowUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FOLLOW_USER_SUCCESS:
      return {
        ...state,
        ...action.payload,
        isUserFollowed: true,
      };
    case actionTypes.FOLLOW_USER_FAIL:
      return {
        ...state,
        ...action.payload,
        isUserFollowed: false,
      };
    default:
      return state;
  }
};

export const ViewUserFollowers = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.VIEW_USER_FOLLOWERS_SUCCESS:
      return {
        ...state,
        ...action.payload,
        areFollowersRetrieved: true,
      };
    case actionTypes.VIEW_USER_FOLLOWERS_FAIL:
      return {
        ...state,
        ...action.payload,
        areFollowersRetrieved: false,
      };
    default:
      return state;
  }
};
