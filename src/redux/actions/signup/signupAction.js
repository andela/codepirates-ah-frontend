import { toast } from 'react-toastify';
import * as actions from '../actionTypes';


export const succesfulSignUpAction = (data) => ({
  type: actions.SIGNUP_SUCCESS,
  payload: data,
});

export const failedSignUpAction = (error) => ({
  type: actions.SIGNUP_ERROR,
  payload: error,
});

export const signupAction = (input) => (dispatch) => fetch(`${actions.BACKEND_URL}/api/v1/users/signup`, {
  method: 'POST',
  headers: {
    'content-type': 'application/json',
  },
  body: JSON.stringify(input),
})
  .then((res) => res.json())
  .then((response) => {
    if (response.status === 201) {
      toast.success(response.message);
      return dispatch(succesfulSignUpAction(response));
    }
    toast.error(response.message);
    return dispatch(failedSignUpAction(response));
  })
  .catch((error) => dispatch(failedSignUpAction(error)));
