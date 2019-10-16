import * as actionTypes from '../../actionTypes';

export const displayPopularArticlesActionCreatorSuccess = (data) => ({
  type: actionTypes.FETCH_POPULAR_ARTICLES_ON_LANDING_PAGE_SUCCESS,
  payload: data,
});

export const displayPopularArticlesActionCreatorError = (error) => ({
  type: actionTypes.FETCH_POPULAR_ARTICLES_ON_LANDING_PAGE_ERROR,
  payload: error,
});

const displayPopularArticlesAction = () => (dispatch) => fetch(`${actionTypes.BACKEND_URL}/api/${actionTypes.VERSION}/articles?popular=popular`)
  .then((res) => res.json())
  .then((data) => {
    if (data.status === 'success') {
      return dispatch(displayPopularArticlesActionCreatorSuccess(data));
    }
    return dispatch(displayPopularArticlesActionCreatorError(data));
  })
  .catch((error) => `server error : ${error}`);

export default displayPopularArticlesAction;
