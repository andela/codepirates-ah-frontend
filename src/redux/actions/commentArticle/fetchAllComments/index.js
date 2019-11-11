import * as actionTypes from '../../actionTypes';

export const fetchArticleCommentsActionCreatorSuccess = (data) => ({
  type: actionTypes.FETCH_ALL_ARTICLE_COMMENTS_SUCCESS,
  payload: data,
});
export const fetchArticleCommentsActionCreatorError = (error) => ({
  type: actionTypes.FETCH_ALL_ARTICLE_COMMENTS_ERROR,
  payload: error,
});

const allArticleCommentsAction = (slug, offset, limit) => (dispatch) => {
  if (offset && limit) {
    fetch(
      `${actionTypes.BACKEND_URL}/api/${actionTypes.VERSION}/comments/${slug}?offset=${offset}&limit=${limit}`,
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 'success') {
          return dispatch(fetchArticleCommentsActionCreatorSuccess(data));
        }
        return dispatch(fetchArticleCommentsActionCreatorError(data));
      })
      .catch((error) => `Server error: ${error}`);
  }
  fetch(
    `${actionTypes.BACKEND_URL}/api/${actionTypes.VERSION}/comments/${slug}`,
  )
    .then((res) => res.json())
    .then((data) => {
      if (data.status === 'success') {
        return dispatch(fetchArticleCommentsActionCreatorSuccess(data));
      }
      return dispatch(fetchArticleCommentsActionCreatorError(data));
    })
    .catch((error) => `Server error: ${error}`);
};

export default allArticleCommentsAction;
