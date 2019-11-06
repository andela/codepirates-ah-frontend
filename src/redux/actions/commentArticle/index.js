import * as actionTypes from '../actionTypes';

const token = localStorage.getItem('token');
export const commentAnArticleActionCreatorSuccess = (data) => ({
  type: actionTypes.COMMENT_ON_AN_ARTICLE_SUCCESS,
  payload: data,
});
export const commentAnArticleActionCreatorError = (error) => ({
  type: actionTypes.COMMENT_ON_AN_ARTICLE_ERROR,
  payload: error,
});

const commentOnArticleAction = (slug, input) => (dispatch) => {
  fetch(
    `${actionTypes.BACKEND_URL}/api/${actionTypes.VERSION}/comments/${slug}`,
    {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        'x-access-token': token,
      },
      body: JSON.stringify(input),
    },
  )
    .then((res) => res.json())
    .then((data) => {
      if (data.status === 'success') {
        return dispatch(commentAnArticleActionCreatorSuccess(data));
      }
      return dispatch(commentAnArticleActionCreatorError(data));
    })
    .catch((error) => `Server error: ${error}`);
};

export default commentOnArticleAction;
