import { toast } from 'react-toastify';
import * as profileActionCreators from './profileAction';
import { BASE_URL, VERSION } from '../actionTypes';

const token = localStorage.getItem('token');
export const fetchProfile = () => (dispatch) => {
  dispatch(profileActionCreators.fetchProfilePending());
  return fetch(`${BASE_URL}/api/${VERSION}/profile`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'x-access-token': token,
    },
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.status === 'error') {
        throw (res.error);
      }
      return dispatch(profileActionCreators.fetchProfileSuccess(res.data));
    })
    .catch((error) => dispatch(profileActionCreators.fetchProfileError(error)));
};

export const updateProfile = (data) => (dispatch) => {
  dispatch(profileActionCreators.updateProfilePending());
  const formData = new FormData();
  formData.append('bio', data.bio);
  formData.append('username', data.username);
  formData.append('image', data.image);

  return fetch(`${BASE_URL}/api/${VERSION}/profile`, {
    method: 'PUT',
    mode: 'cors',
    headers: {
      Accept: 'application/json',
      'Access-Control-Allow-Origin': '*',
      'x-access-token': token,
    },
    body: formData,
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.status === 'error') {
        toast.error(res.message);
        throw (res.message);
      }
      toast.success(res.message);
      return dispatch(profileActionCreators.updateProfileSuccess(res.data));
    })
    .catch((error) => dispatch(profileActionCreators.updateProfileError(error)));
};
