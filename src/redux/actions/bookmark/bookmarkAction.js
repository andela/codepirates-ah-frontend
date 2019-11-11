import * as actionType from '../actionTypes';

export function fetchBookmarkPending() {
  return {
    type: actionType.BOOKMARK_PENDING,
  };
}
export function fetchBookmarkSuccess(payload) {
  return {
    type: actionType.BOOKMARK_SUCCESS,
    bookmarkStatus: payload,
  };
}
export function fetchSuccess(bookmarks) {
  return {
    type: actionType.FETCH_MY_BOOKMARKS_SUCCESS,
    bookmarks,
  };
}

export function fetchFail() {
  return {
    type: actionType.FETCH_MY_BOOKMARKS__FAIL,
  };
}
export function fetchBookmarkError(payload) {
  return {
    type: actionType.BOOKMARK_ERROR,
    bookmarkError: payload,
  };
}
