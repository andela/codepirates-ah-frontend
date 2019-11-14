import * as actionTypes from '../../actions/actionTypes';
import initialState from '../../store/initialState';

const notifications = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_NOTIFICATIONS_SUCCESS:
      return {
        ...state,
        ...action.payload,
        getNotifications: true,
      };
    case actionTypes.GET_NOTIFICATIONS_FAILURE:
      return {
        ...state,
        ...action.payload,
        getNotifications: false,
      };
    default:
      return state;
  }
};

export default notifications;
