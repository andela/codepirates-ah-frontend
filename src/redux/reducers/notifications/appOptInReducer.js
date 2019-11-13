import * as actions from '../../actions/actionTypes';
import initialState from '../../store/initialState';


const appOptInOutReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.App_OPT_IN_OUT_SUCCESS:
      return {
        ...state,
        ...action.payload,
        appOptInOutSuccess: true,
      };
    default:
      return state;
  }
};

export default appOptInOutReducer;
