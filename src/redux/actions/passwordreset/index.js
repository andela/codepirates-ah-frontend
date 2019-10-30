import { toast } from 'react-toastify';
import {
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_FAILURE,
  BACKEND_URL,
  VERSION,
} from '../actionTypes';
import {
  linkSent,
  resetSuccess,
} from '../../../helpers/passwordResetConstants';

export const successfulResetRequest = (message, subject) => ({
  type: RESET_PASSWORD_SUCCESS,
  payload: { message, subject },
});

export const failedResetRequest = (error) => ({
  type: RESET_PASSWORD_FAILURE,
  payload: { error },
});

export const fetchData = (body) => {
  const { token } = body;
  const [url, method] = token ? [`/${token}`, 'put'] : ['', 'post'];
  return fetch(`${BACKEND_URL}/api/${VERSION}/users/reset${url}`, {
    method,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
    mode: 'cors',
  });
};

const resetPasswordAction = (body, promise) => async (dispatch) => {
  const { email, token } = body;
  const [subject, msg] = token
    ? ['Reset Successful!', resetSuccess]
    : ['Reset Link Sent!', linkSent(email)];
  const json = await promise.json();
  const { message } = json;
  let response;
  if (json.status === 200) {
    toast.success(message);
    response = dispatch(successfulResetRequest(msg, subject));
  } else {
    toast.error(message);
    response = dispatch(failedResetRequest(message));
  }
  return response;
};

export default resetPasswordAction;
