import * as actionTypes from '../actionTypes';
import { getApi } from '../../../api/userApi';

export const authSuccess = (authType, profile) => {
  switch (authType.toUpperCase()) {
    case 'GOOGLE':
      return ({
        type: actionTypes.GOOGLE_AUTH_SUCCESS,
        profile,
      });
    case 'FACEBOOK':
      return ({
        type: actionTypes.FACEBOOK_AUTH_SUCCESS,
        profile,
      });

    case 'TWITTER':
      return ({
        type: actionTypes.TWITTER_AUTH_SUCCESS,
        profile,
      });
    default: return null;
  }
};

export const getSocialAuthAction = (authType) => {
  switch (authType.toUpperCase()) {
    case 'GOOGLE':
      return actionTypes.GOOGLE_AUTH_FAIL;
    case 'FACEBOOK':
      return actionTypes.FACEBOOK_AUTH_FAIL;
    case 'TWITTER':
      return actionTypes.TWITTER_AUTH_FAIL;
    default:
      return null;
  }
};
export const authFail = (error, authType) => ({
  type: getSocialAuthAction(authType),
  payload: error,
});

export const socialAuth = (token, authType) => async (dispatch) => {
  const data = await getApi('GET', 'profile');
  if (data.status === 'success') {
    return dispatch(authSuccess(authType, data.data));
  }
  return dispatch(authFail(data.data, authType));
};
