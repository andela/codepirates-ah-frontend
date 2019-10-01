import { toast } from 'react-toastify';
import * as actionTypes from './actionTypes';

const { BASE_URL, apiVersion } = process.env;
const authSuccess = (authType, newUser) => {
  switch (authType.toUpperCase()) {
    case 'GOOGLE':
      return ({
        type: actionTypes.GOOGLE_AUTH_SUCCESS,
        newUser,
      });
    case 'FACEBOOK':
      return ({
        type: actionTypes.FACEBOOK_AUTH_SUCCESS,
        newUser,
      });

    case 'TWITTER':
      return ({
        type: actionTypes.TWITTER_AUTH_SUCCESS,
        newUser,
      });
    default: return null;
  }
};

const getSocialAuthAction = (authType) => {
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
const authFail = (error, authType) => ({
  type: getSocialAuthAction(authType),
  payload: error,
});
const socialAuthPending = () => ({
  type: actionTypes.SOCIAL_AUTH_LOADING,

});

const socialAuth = (authType) => async (dispatch) => {
  dispatch(socialAuthPending());
  const url = `${BASE_URL}/api/${apiVersion}/${authType}`;
  try {
    const response = await fetch(`${url}`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
      },
    });
    const data = await response.json();
    if (data.status === 200 || data.status === 201) {
      localStorage.setItem('token', data.token);
      toast.success(data.message);
      return dispatch(authSuccess(authType, data.body));
    }
    toast.error(data.message);
    return dispatch(authFail(data.message, authType));
  } catch (error) {
    toast.error(error);
    return dispatch(authFail(error, authType));
  }
};
export default socialAuth;
