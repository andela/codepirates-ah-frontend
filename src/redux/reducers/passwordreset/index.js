import { RESET_PASSWORD_SUCCESS } from '../../actions/actionTypes';
import initialState from '../../store/initialState';

export const passwordReset = (state = initialState.passwordReset, action) => {
  switch (action.type) {
    case RESET_PASSWORD_SUCCESS:
      return { ...state, ...action.update };
    default:
      return state;
  }
};

export default passwordReset;
