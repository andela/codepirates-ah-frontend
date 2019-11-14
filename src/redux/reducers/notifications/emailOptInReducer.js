import * as actions from '../../actions/actionTypes';
import initialState from '../../store/initialState';


const emailOptInOutReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.Email_OPT_IN_OUT_SUCCESS:
      return {
        ...state,
        ...action.payload,
        emailOptInOutSuccess: true,
      };
    default:
      return state;
  }
};

export default emailOptInOutReducer;
