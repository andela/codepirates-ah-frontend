import { RESET_PASSWORD_SUCCESS } from '../actionTypes';

export const responseMessage = (message, title) => ({
  type: RESET_PASSWORD_SUCCESS,
  update: { message, title },
});

export const resetRequest = (parent) => {
  const userData = parent.state;
  const { location } = parent.props;
  const token = new URLSearchParams(location.search).get('token');
  const [url, method] = location.search
    ? [`/${token}`, 'put']
    : ['', 'post'];
  return fetch(
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


