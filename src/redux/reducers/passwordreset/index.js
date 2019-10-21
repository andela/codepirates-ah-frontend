import { ResponseMessage, FormData, Status } from '../../actions/actionTypes';
import initialState from '../../store/initialState';

export const passwordReset = (state = initialState.passwordReset, action) => {
  switch (action.type) {
    case ResponseMessage:
      return { ...state, ...action.update };
    case Status:
      return { ...state, ...action.update };
    case FormData:
      return { ...state.formData, ...action.update };
    case 'emailSent':
      return { ...state, summary: 'Password reset email sent' };
    case 'passwordReset':
      return { ...state, summary: 'Password reset successful' };
    default:
      return state;
  }
};

export default passwordReset;
