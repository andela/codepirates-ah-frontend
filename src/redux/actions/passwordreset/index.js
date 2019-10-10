import { ResponseMessage, FormData, Status } from '../actionTypes';

export const responseMessage = (message) => ({ type: ResponseMessage, update: { message } });

export const setStatus = (status) => (
  { type: Status, update: { status } }
);

export const formData = (email, password, confirmPassword) => (
  { type: FormData, update: { email, password, confirmPassword } }
);

export const resetRequest = async (ref) => {
  const token = (new URLSearchParams(ref.props.location.search)).get('token');
  const { message, ...userData } = ref.state;
  const [url, method] = ref.props.location.search ? [`/${token}`, 'put']
    : ['', 'post'];
  return fetch(`https://codepirates-ah-backend.herokuapp.com/api/v1/users/reset${url}`, {
    method,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },

    body: JSON.stringify(
      userData,
    ),
    mode: 'cors',
  });
};

export default resetRequest;
