import * as actionTypes from '../actionTypes';
import { getApi } from '../../../api/userApi';

export const fetchSuccess = (bookmarks) => ({
  type: actionTypes.FETCH_MY_BOOKMARKS_SUCCESS,
  bookmarks,
});

export const fetchFail = (bookmarks) => ({
  type: actionTypes.FETCH_MY_BOOKMARKS__FAIL,
  bookmarks,
});


export const fechMybookmark = () => async (dispatch) => {
  const data = await getApi('GET', 'users/bookmarks');
  if (data.status === 'success') {
    return dispatch(fetchSuccess(data.data));
  }
  return dispatch(fetchFail(data.data));
};
