import * as actionTypes from '../actionTypes';

export const displayArticleActionCreator = (data) => ({
  type: actionTypes.FETCH_ARTICLES_ON_LANDING_PAGE_SUCCESS,
  payload: data,
});
export const displayArticleActionError = (error) => ({
  type: actionTypes.FETCH_ARTICLES_ON_LANDING_PAGE_ERROR,
  payload: error,
});

const displayArticleAction = () => (dispatch) => fetch(`${actionTypes.BACKEND_URL}/api/${actionTypes.VERSION}/articles`)
  .then((res) => res.json())
  .then((data) => {
    if (data.status === 200) {
      return dispatch(displayArticleActionCreator(data));
    }
    return dispatch(displayArticleActionError(data));
  })
  .catch((error) => `server error : ${error}`);

export default displayArticleAction;
