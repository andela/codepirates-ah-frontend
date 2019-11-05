import * as actionTypes from '../actionTypes';
import { postApi } from '../../../api/userApi';

export const deleteSuccess = () => ({
  type: actionTypes.DELETE_ARTICLE_SUCCESS,
});

export const deleteFail = () => ({
  type: actionTypes.DELETE_ARTICLE_FAIL,
});
export const rateSuccess = () => ({
  type: actionTypes.RATE_ARTICLE_SUCCESS,
});

export const rateFail = () => ({
  type: actionTypes.RATE_ARTICLE_FAIL,
});

export const deleteArticle = (slug) => async (dispatch) => {
  const data = await postApi('DELETE', `articles/${slug}`);
  if (data.status === 'success') {
    return dispatch(deleteSuccess());
  }
  return dispatch(deleteFail());
};
export const postRatings = (slug, rate) => async (dispatch) => {
  let given = {
    rate,
  };
  given = JSON.stringify(given);
  const data = await postApi('PUT', `rate/${slug}`, given);

  if (data.status === 'success') {
    return dispatch(rateSuccess());
  }
  return dispatch(rateFail());
};
