import * as actions from '../actionTypes';

export const displayArticleActionCreator = (data) => ({
  type: actions.FETCH_ARTICLES_ON_LANDING_PAGE_SUCCESS,
  payload: data,
});
export const displayArticleActionError = (error) => ({
  type: actions.FETCH_ARTICLES_ON_LANDING_PAGE_ERROR,
  payload: error,
});

export const getAllArticles = () => (dispatch) => fetch(`${actions.BASE_URL}/api/${actions.VERSION}/articles`)
  .then((res) => res.json())
  .then((data) => {
    if (data.status === 200) {
      return dispatch(displayArticleActionCreator(data));
    }
    return dispatch(displayArticleActionError(data));
  })
  .catch((error) => `server error : ${error}`);
