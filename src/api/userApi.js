
import {
  handleResponse,
  handleError,
} from './apiUtil';

const { API_VERSION } = process.env;
const { BACKEND_URL } = process.env;
const token = localStorage.getItem('token');
export const getApi = async (method, url) => fetch(`${BACKEND_URL}/api/${API_VERSION}/${url}`, {
  method,
  headers: {
    'Content-Type': 'application/json',
    'x-access-token': token || '',
  },
})
  .then(handleResponse)
  .catch(handleError);

export const postApi = async (method, url, data) => fetch(`${BACKEND_URL}/api/${API_VERSION}/${url}`, {
  method,
  mode: 'cors',
  cache: 'reload',
  headers: {
    'Content-Type': 'application/json',
    'x-access-token': token || '',
  },
  body: data || '',
})
  .then(handleResponse)
  .catch(handleError);
