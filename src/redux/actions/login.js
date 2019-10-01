import { toast } from 'react-toastify';
import * as actions from './actionTypes';

const { BASE_URL } = process.env;
const succesfulLoginAction = (data) => {
  localStorage.setItem('token', `${data.token}`);
  toast.success(data.message);
  return {
    type: actions.LOGIN_SUCCESS,
    payload: data,
  };
};

const failedLoginAction = (error) => ({
  type: actions.LOGIN_ERROR,
  payload: error,
});

const loginAction = (input) => (dispatch) => {
  fetch(`${BASE_URL}/api/v1/users/login`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(input),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.status === 200) {
        return dispatch(succesfulLoginAction(data));
      }
      return dispatch(failedLoginAction(data));
    })
    .catch((error) => `server error: ${error}`);
};

export default loginAction;
