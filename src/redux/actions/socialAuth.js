import { toast } from 'react-toastify';
import * as actionTypes from './actionTypes';

const { BACKEND_URL } = process.env;
const { API_VERSION } = process.env;
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

const socialAuth = (token, authType) => async (dispatch) => {
  const url = `${BACKEND_URL}/api/${API_VERSION}/profile`;
console.log(token);
  try {
    const response = await fetch(`${url}`, {
      method: 'GET',
      mode: 'cors',
      headers: {
        'content-type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'x-access-token': token,
      },
    });
    const data = await response.json();
    if (data.status === 'success') {
      toast.error(data.message);
      console.log(data);
      localStorage.setItem('token', token);
      toast.success(data.message);
      return dispatch(authSuccess(authType, data.body));
    }
    console.log(data);
    toast.error(data.message);
    return dispatch(authFail(data.message, authType));
  } catch (error) {
    toast.error(error);
    return dispatch(authFail(error, authType));
  }
};
export default socialAuth;
