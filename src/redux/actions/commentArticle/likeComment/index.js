import { toast } from 'react-toastify';
import * as actionTypes from '../../actionTypes';

export const likeActionCreatorSuccess = (data, commentId) => ({
  type: actionTypes.LIKE_A_COMMENT_SUCCESS,
  payload: { ...data, commentId },
});

export const likeActionCreatorError = (error) => ({
  type: actionTypes.LIKE_A_COMMENT_ERROR,
  payload: error,
});

const likeCommentAction = (commentId, method) => (dispatch) => {
  const token = localStorage.getItem('token');
  return fetch(`${actionTypes.BACKEND_URL}/api/v1/comments/like/${commentId}`, {
    method: method || 'POST',
    headers: {
      'Content-type': 'application/json',
      'x-access-token': token,
    },
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.status === 'success') {
        toast.success(data.message.formattedLikeInfo);
        return dispatch(likeActionCreatorSuccess(data, commentId));
      }
      toast.error(data.message);
      return dispatch(likeActionCreatorError(data));
    })
    .catch((error) => `server error ${error}`);
};


export default likeCommentAction;
