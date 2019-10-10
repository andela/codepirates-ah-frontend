/* eslint-disable import/prefer-default-export */
import {
  ResponseMessage, FormData, Status,
} from '../../actions/actionTypes';
import initialState from '../../store/initialState';

export const responseMessage = (state = initialState, action) => {
  switch (action.type) {
    case ResponseMessage:
      return ({ ...state.responseMessage, ...action.update });
    default:
      return state;
  }
};

export const setStatus = (state = initialState, action) => {
  switch (action.type) {
    case Status:
      return ({ ...state.setStatus, ...action.update });
    default:
      return state;
  }
};

export const formData = (state = initialState, action) => {
  switch (action.type) {
    case FormData:
      return ({ ...state.formData, ...action.update });
    default:
      return state;
  }
};

export const summary = (state = initialState, action) => {
  switch (action.type) {
    case 'emailSent':
      return ({ ...state, summary: 'Password reset email sent' });
    case 'passwordReset':
      return ({ ...state, summary: 'Password reset successful' });
    default:
      return state;
  }
};
