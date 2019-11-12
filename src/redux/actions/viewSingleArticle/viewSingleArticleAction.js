/* eslint-disable no-useless-escape */
import * as actions from '../actionTypes';
import { getHighlights } from '../highlight';

const token = localStorage.getItem('token');
export const viewArticleSuccess = (data) => ({
  type: actions.VIEW_ARTICLE_SUCCESS,
  payload: data,
});

const stripHtml = (html) => {
  const tmp = document.createElement('DIV');
  tmp.innerHTML = html;
  return tmp.textContent || tmp.innerText || '';
};

export const findIndex = (html, index, text) => {
  let i = index;
  const section = html.slice(0, i);
  while (
    section
    && stripHtml(section.length < index)
    && html[i] !== text
    && html.slice(i).indexOf(text) !== -1
  ) {
    i += html.slice(i).indexOf(text);
    findIndex(html, i, text);
  }
  return i;
};

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

export const viewArticle = (slug) => async (dispatch) => fetch(`${actions.BACKEND_URL}/api/${actions.VERSION}/articles/${slug}`, {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    'x-access-token': token,
  },
})
  .then((res) => res.json())
  .then((response) => {
    if (response.message === 'That article does not exist!') {
      window.location = '/notfound';
    }
    getHighlights(response.data.id).then((res1) => {
      response.data.body = showHighlights(response.data.body, res1);
      return dispatch(viewArticleSuccess(response));
    });
  });
