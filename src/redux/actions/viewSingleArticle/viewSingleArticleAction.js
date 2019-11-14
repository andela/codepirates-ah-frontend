/* eslint-disable no-useless-escape */
import * as actions from '../actionTypes';
import { getHighlights } from '../highlight';

const token = localStorage.getItem('token');
export const viewArticleSuccess = (data) => ({
  type: actions.VIEW_ARTICLE_SUCCESS,
  payload: data,
});

const countText = (html, index) => {
  let i;
  let str = `${html.slice(0, index).replace(/\"/g, "'")}`;
  const markup = str.match(/<\/?[\w\s="/.':;#-\/\?]+>\s?(\s=\s)?/gi);
  if (!markup) {
    i = index;
  } else {
    const lengths = markup.map((e) => e.length);
    const totalLength = lengths.reduce((a, b) => a + b, 0);
    str = str.slice(index, index + totalLength);
    i = index + totalLength;
    countText(str, i);
  }
  return i;
};

const showHighlights = (body, indices) => {
  let res = body;
  const highlight = (index) => res.slice(countText(res, index[0]), countText(res, index[1]));
  indices.forEach((index) => {
    res = res.replace(
      highlight(index),
      `<em style=\"background: yellow\">${highlight(index)}</em>`,
    );
  });
  return res;
};

export const fetchArticle = (slug) => fetch(`${actions.BACKEND_URL}/api/${actions.VERSION}/articles/${slug}`, {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    'x-access-token': token,
  },
}).then((res) => res.json());

export const viewArticle = (slug, geter, highlight) => async (dispatch) => {
  const response = await geter(slug);
  if (response.message === 'That article does not exist!') {
    window.location = '/notfound';
  }
  const res1 = await highlight(response.data.id);
  response.data.body = await showHighlights(response.data.body, res1);
  return dispatch(viewArticleSuccess(response));
};
