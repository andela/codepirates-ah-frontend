import { toast } from 'react-toastify';
import * as actionsTypes from '../actionTypes';

export const succesfulLoginAction = (data) => {
  localStorage.setItem('token', `${data.token}`);
  return {
    type: actionsTypes.LOGIN_SUCCESS,
    payload: data,
  };
};

export const failedLoginAction = (error) => {
  toast.error(error.message);
  return {
    type: actionsTypes.LOGIN_ERROR,
    payload: error,
  };
};

const loginAction = (input) => (dispatch) => fetch(`${actionsTypes.BACKEND_URL}/api/${actionsTypes.VERSION}/users/login`, {
  method: 'POST',
  headers: {
    'content-type': 'application/json',
  },
  body: JSON.stringify(input),
})
  .then((res) => res.json())
  .then((data) => (data.status === 200
    ? dispatch(succesfulLoginAction(data))
    : dispatch(failedLoginAction(data))))
  .catch((error) => `server error: ${error}`);

export default loginAction;
