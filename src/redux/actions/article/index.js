import { toast } from 'react-toastify';
import * as actions from '../actionTypes';

const token = localStorage.getItem('token');

export const successCreateArticleAction = (data) => ({
  type: actions.CREATE_ARTICLE_SUCCESS,
  payload: data,
});
export const failedCreateArticleAction = (error) => ({
  type: actions.CREATE_ARTICLE_FAIL,
  payload: error,
});
export const CreateArticleAction = (input) => (dispatch) => fetch(`${actions.BACKEND_URL}/api/v1/articles`, {
  method: 'POST',
  headers: {
    'content-type': 'application/json',
    'x-access-token': `Bearer ${token}`,
  },
  body: JSON.stringify(input),
})
  .then((res) => res.json())
  .then((data) => {
    if (data.status === 201) {
      toast.success('Article is sucessfully created');
      return dispatch(successCreateArticleAction(data));
    }

    return dispatch(failedCreateArticleAction(data));
  })
  .catch((error) => dispatch(failedCreateArticleAction(error)));

export default CreateArticleAction;
