import { toast } from 'react-toastify';
import {
  SHARE_ARTICLE_FAILURE,
  SHARE_ARTICLE_SUCCESS,
  BACKEND_URL,
  VERSION,
} from '../actionTypes';

const articleShareSuccess = (channel) => ({
  type: SHARE_ARTICLE_SUCCESS,
  payload: { [`sharedOn${channel}`]: true },
});

const articleShareFailure = (channel) => ({
  type: SHARE_ARTICLE_FAILURE,
  payload: { [`sharedOn${channel}`]: false },
});

export const fetchshare = (slug, channel) => fetch(`${BACKEND_URL}/api/${VERSION}/articles/${slug}/share/${channel}`, {
  method: 'post',
  headers: {
    Accept: '*/*',
    'Content-Type': 'application/json',
    authorization: localStorage.getItem('token'),
  },
  mode: 'cors',
  body: JSON.stringify({ url: window.location.href }),
}).then((res) => res.json());

export const articleShareAction = (status, channel) => (dispatch) => {
  let res;
  if (status === 200 || status === 'success') {
    res = dispatch(articleShareSuccess(channel));
  } else {
    toast.error('sharing failed');
    res = dispatch(articleShareFailure(channel));
  }
  return res;
};
