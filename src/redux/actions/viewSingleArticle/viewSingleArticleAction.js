import * as actions from '../actionTypes';

const token = localStorage.getItem('token');
export const viewArticleSuccess = (data) => ({
  type: actions.VIEW_ARTICLE_SUCCESS,
  payload: data,
});

export const viewArticle = (slug) => (dispatch) => fetch(`${actions.BASE_URL}/api/v1/articles/${slug}`, {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    'x-access-token': token,
  },
}).then((res) => res.json()).then((response) => {
  if (response.message === 'That article does not exist!') {
    window.location = '/notfound';
  }
  return dispatch(viewArticleSuccess(response));
});
