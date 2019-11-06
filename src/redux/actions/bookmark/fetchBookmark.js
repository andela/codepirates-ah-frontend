import { toast } from 'react-toastify';
import * as bookmarkActionCreators from './bookmarkAction';
import { BACKEND_URL, VERSION } from '../actionTypes';

export const createBookmark = (articleId, name) => (dispatch) => {
  const token = localStorage.getItem('token');
  dispatch(bookmarkActionCreators.fetchBookmarkPending());
  return fetch(`${BACKEND_URL}/api/${VERSION}/users/bookmarks`, {
    method: 'POST',
    mode: 'cors',
    headers: {
      'content-type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'x-access-token': token,
    },
    body: JSON.stringify({
      articleId,
      name,
    }),
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.status === 'error') {
        throw (res.message);
      }
      toast.success('Successfully bookmarked this article');
      localStorage.setItem(`${name}`, 'isBookmarked');
      return dispatch(bookmarkActionCreators.fetchBookmarkSuccess(res.data));
    })
    .catch((error) => dispatch(bookmarkActionCreators.fetchBookmarkError(error)));
};

export const deleteBookmark = (name) => (dispatch) => {
  const token = localStorage.getItem('token');
  dispatch(bookmarkActionCreators.fetchBookmarkPending());
  return fetch(`${BACKEND_URL}/api/${VERSION}/users/bookmarks/${name}`, {
    method: 'DELETE',
    mode: 'cors',
    headers: {
      'content-type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'x-access-token': token,
    },
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.status === 'error') {
        throw (res.message);
      }
      toast.success('Successfully removed this article from your bookmarks');
      localStorage.removeItem(name);
      return dispatch(bookmarkActionCreators.fetchBookmarkSuccess(res.data));
    })
    .catch((error) => dispatch(bookmarkActionCreators.fetchBookmarkError(error)));
};
