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

export const reportPending = () => ({
  type: actionTypes.REPORT_PENDING,
});
export const reportSuccess = (payload) => ({
  type: actionTypes.REPORT_SUCCESS,
  reportMessage: payload,
});
export const reportFail = (payload) => ({
  type: actionTypes.REPORT_ERROR,
  reportError: payload,
});

export const deleteArticle = (slug) => async (dispatch) => {
  const data = await postApi('DELETE', `articles/${slug}`);
  if (data.status === 'success') {
    window.location.replace('/profile');
    return dispatch(deleteSuccess());
  }
  return dispatch(deleteFail());
};

export const reportArticle = (slug, reason) => async (dispatch) => {
  dispatch(reportPending());
  const payload = JSON.stringify({ reason });
  const data = await postApi('POST', `reports/${slug}`, payload);
  if (data.status === 'success') {
    dispatch(reportSuccess(data.data.reason));
    return;
  }
  return dispatch(reportFail(data.message));
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
