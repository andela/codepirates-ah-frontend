import fetch from 'isomorphic-fetch';
import * as actionTypes from '../actionTypes';

const token = localStorage.getItem('token');
export const viewSpecificUserArticlesSuccess = (data) => ({
  type: actionTypes.VIEW_SPECIFIC_USER_ARTICLES_SUCCESS,
  payload: data,
});
export const viewSpecificUserArticlesFail = (error) => ({
  type: actionTypes.VIEW_SPECIFIC_USER_ARTICLES_FAIL,
  payload: error,
});
const viewSpecificUserArticles = () => (dispatch) => fetch(`${actionTypes.BACKEND_URL}/api/v1/articles/mine`, {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    'x-access-token': token,
  },
})
  .then((res) => res.json())
  .then((response) => {
    if (response.data.length !== 0) {
      return dispatch(viewSpecificUserArticlesSuccess(response));
    }
    return dispatch(viewSpecificUserArticlesFail(response));
  })
  .catch((error) => error);

export default viewSpecificUserArticles;
