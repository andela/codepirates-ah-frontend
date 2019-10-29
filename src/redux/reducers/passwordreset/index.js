import { RESET_PASSWORD_SUCCESS, RESET_PASSWORD_FAILURE } from '../../actions/actionTypes';
import initialState from '../../store/initialState';

export const passwordResetReducer = (state = initialState.passwordReset, action) => {
  switch (action.type) {
    case RESET_PASSWORD_SUCCESS:
      return { ...state, success: action.payload, error: '' };
    case RESET_PASSWORD_FAILURE:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default passwordResetReducer;
