import { toast } from 'react-toastify';
import * as likeActionCreators from './likeAction';
import { BACKEND_URL, VERSION } from '../actionTypes';

export const getClaps = (articleSlug) => (dispatch) => {
  const token = localStorage.getItem('token');
  dispatch(likeActionCreators.fetchClapPending());
  return fetch(`${BACKEND_URL}/api/${VERSION}/likes/claps/${articleSlug}`, {
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
      const total = res.data.claps.reduce((acc, item) => acc + item.total);
      dispatch(likeActionCreators.fetchClapSuccess(total.total));
      return total;
    })
    .catch((error) => dispatch(likeActionCreators.fetchClapError(error)));
};

export const updateClaps = (articleSlug, currentClapCount) => (dispatch) => {
  const token = localStorage.getItem('token');
  dispatch(likeActionCreators.fetchClapPending());
  return fetch(`${BACKEND_URL}/api/${VERSION}/likes/clap/${articleSlug}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'x-access-token': token,
    },
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.status === 'error') {
        throw (res.message);
      }
      const total = parseInt(currentClapCount, 10) + 1;
      dispatch(likeActionCreators.fetchClapSuccess(total));
      return total;
    })
    .catch((error) => {
      toast.error(error);
      dispatch(likeActionCreators.fetchClapError(error));
      return error;
    });
};

export const cancelClaps = (articleSlug) => (dispatch) => {
  const token = localStorage.getItem('token');
  dispatch(likeActionCreators.fetchClapPending());
  return fetch(`${BACKEND_URL}/api/${VERSION}/likes/unlike/${articleSlug}`, {
    method: 'PUT',
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
      return dispatch(likeActionCreators.fetchClapSuccess(originalClaps));
    })
    .catch((error) => dispatch(likeActionCreators.fetchClapError(error)));
};

export const dislikeArticle = (articleSlug) => (dispatch) => {
  const Usertoken = localStorage.getItem('token');
  dispatch(likeActionCreators.fetchDislikePending());
  return fetch(`${BACKEND_URL}/api/${VERSION}/likes/dislike/${articleSlug}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'x-access-token': Usertoken,
    },
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.status === 'error') {
        throw (res.message);
      }
      if (res.data.status === 'dislike') {
        toast.success('Article disliked successully');
      } else {
        toast.success('Restored article status to neutral');
      }
      const status = res.data.status === 'dislike';
      dispatch(likeActionCreators.fetchDislikeSuccess());
      return status;
    })
    .catch((error) => {
      toast.error(error);
      dispatch(likeActionCreators.fetchDislikeError(error));
    });
};

export const getDislikes = (articleSlug) => (dispatch) => {
  const token = localStorage.getItem('token');
  if (!token) return false;
  dispatch(likeActionCreators.fetchDislikePending());
  return fetch(`${BACKEND_URL}/api/${VERSION}/likes/dislikes/${articleSlug}`, {
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
      dispatch(likeActionCreators.fetchDislikeSuccess(res.data.dislikes));
      return res.data.dislikes;
    })
    .catch((error) => dispatch(likeActionCreators.fetchDislikeError(error)));
};
