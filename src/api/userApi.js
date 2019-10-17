import * as actionsTypes from '../redux/actions/actionTypes';
import {
  handleResponse,
  handleError,
} from './apiUtil';

const token = localStorage.getItem('token');
export const getApi = async (method, url) => fetch(`${actionsTypes.BASE_URL}/api/${actionsTypes.VERSION}/${url}`, {
  method,
  headers: {
    'Content-Type': 'application/json',
    'x-access-token': token || '',
  },
})
  .then(handleResponse)
  .catch(handleError);

export const postApi = async (method, url, data) => fetch(`${actionsTypes.BASE_URL}/api/${actionsTypes.VERSION}/${url}`, {
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
