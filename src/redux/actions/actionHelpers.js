import { toast } from 'react-toastify';

import { BACKEND_URL, VERSION } from './actionTypes';

export const fetchOptions = (method) => ({
  method,
  headers: {
    Accept: '*/*',
    'Content-Type': 'application/json',
    authorization: localStorage.getItem('token'),
  },
  mode: 'cors',
});

export const flashToast = (resp) => {
  const { status } = resp;
  const res = (status === 'success' || status === 200) ? 'success' : 'error';
  return toast[res](resp.message);
};

const ref = `${BACKEND_URL}/api/${VERSION}/articles`;

export const getArticle = (location) => fetch(`${ref}/${location}`, fetchOptions()).then((res) => res.json());

export const updateArticle = (location, body) => fetch(`${ref}/${location}`, {
  ...fetchOptions('put'),
  body: JSON.stringify(body),
}).then((res) => res.json());
