import * as actions from '../actionTypes';
import { flashToast } from '../actionHelpers';

const token = localStorage.getItem('token');

export const createHighlight = (highlight) => ({
  type: actions.HIGHLIGHT_ARTICLE_SUCCESS,
  payload: { highlight },
});

export const failedHighlight = (highlightError) => ({
  type: actions.HIGHLIGHT_ARTICLE_FAILURE,
  payload: { highlightError },
});

export const fetchHighlights = (articleId) => fetch(
  `${actions.BACKEND_URL}/api/${actions.VERSION}/articles/${articleId}/highlight`,
  {
    headers: {
      Accept: '*/*',
      'Content-Type': 'application/json',
      authorization: token,
    },
  },
)
  .then((res) => res.json())
  .then((resp) => resp.data || []);

export const fetchPostHighlight = (slug, start, end) => fetch(
  `${actions.BACKEND_URL}/api/${actions.VERSION}/articles/${slug}/highlight?startIndex=${start}&endIndex=${end}`,
  {
    headers: {
      Accept: '*/*',
      'Content-Type': 'application/json',
      authorization: token,
    },
    method: 'post',
  },
).then((res) => res.json());

export const getHighlights = async (articleId) => {
  const highlights = token
    ? await fetchHighlights(articleId)
    : [];
  return highlights.map((highlight) => [
    highlight.startindex,
    highlight.endindex,
    highlight.text,
  ]);
};

export const createHighlightAction = (slug, start, end) => async (dispatch) => {
  if (!token) {
    flashToast({ status: 400, message: 'please login to save highlight' });
    window.location.replace('/login');
    return;
  }
  const json = await fetchPostHighlight(slug, start, end);
  flashToast(json);
  return json.status === 201
    ? dispatch(createHighlight(json.data))
    : dispatch(failedHighlight(json.error));
};
