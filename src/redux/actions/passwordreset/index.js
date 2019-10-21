import { ResponseMessage, FormData, Status } from '../actionTypes';
import { sent, passwordReset } from '../../../helpers/passwordResetConstants';

export const responseMessage = (message) => ({
  type: ResponseMessage,
  update: { message },
});

export const setStatus = (status) => ({ type: Status, update: { status } });

export const formData = (email, password, confirmPassword) => ({
  type: FormData,
  update: { email, password, confirmPassword },
});

export const summary = (type) => ({ type });

export const resetRequest = (props, state) => async (dispatch) => {
  const token = new URLSearchParams(props.location.search).get('token');
  const { history, location } = props;
  const { email, password, confirmPassword } = state;
  const emailSent = sent(email);
  const [url, method, type, detail] = location.search
    ? [`/${token}`, 'put', 'emailSent', passwordReset]
    : ['', 'post', 'passwordReset', emailSent];
  const res = await fetch(
    `https://codepirates-ah-backend.herokuapp.com/api/v1/users/reset${url}`,
    {
      method,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(state),
      mode: 'cors',
    },
  );
  const json = await res.json();
  const msg = await json.message;
  dispatch(formData(email, password, confirmPassword));
  dispatch(responseMessage(res.ok ? detail : msg));
  dispatch(summary(type));
  if (res.ok) {
    history.push('/response');
  }
};


