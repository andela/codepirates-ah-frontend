import * as actionTypes from '../../../actionTypes';

const token = localStorage.getItem('token');

export const fetchLikesCreatorSuccess = (data, commentId) => ({
  type: actionTypes.FETCH_LIKES_SUCCESS,
  payload: { ...data, commentId },
});

export const fetchLikesCreatorError = (error) => ({
  type: actionTypes.FETCH_LIKES_ERROR,
  payload: error,
});

const fetchLikesAction = (commentId) => (dispatch) => fetch(`${actionTypes.BACKEND_URL}/api/v1/comments/like/${commentId}`, {
  method: 'GET',
  headers: {
    'Content-type': 'application/json',
    'x-access-token': token,
  },
})
  .then((res) => res.json())
  .then((data) => {
    if (data.status === 'success') {
      return dispatch(fetchLikesCreatorSuccess(data, commentId));
    }
    return dispatch(fetchLikesCreatorError(data));
  });

export default fetchLikesAction;
