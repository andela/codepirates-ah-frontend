import { toast } from 'react-toastify';
import * as actions from '../actionTypes';

export const successGetAllArticlesAction = data => ({
  type: actions.GET_ALL_ARTICLES_SUCCESS,
  payload: data
});
export const failedGetAllArticlesAction = error => ({
  type: actions.GET_ALL_ARTICLES_FAIL,
  payload: error
});
export const GetAllArticlesAction = () => dispatch =>
  fetch('http://localhost:8000/api/v1/articles', {
    method: 'GET',
    headers: {
      'content-type': 'application/json'
    }
  })
    .then(res => res.json())
    .then(data => {
      if (data.status === 200) {
        toast.success(data.message);
        return dispatch(successGetAllArticlesAction(data));
      }

      return dispatch(failedGetAllArticlesAction(data));
    })
    .catch(error => dispatch(failedGetAllArticlesAction(error)));

export default GetAllArticlesAction;
