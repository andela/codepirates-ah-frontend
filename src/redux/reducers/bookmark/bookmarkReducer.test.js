import bookmarkReducer from './bookmarkReducer';
import * as actionTypes from '../../actions/actionTypes';

describe('bookmark reducer', () => {
  const initialState = {
    bookmarkPending: false,
    bookmarkStatus: {},
    bookmarkError: null,
  };
  const bookmarkResultMock = {
    data: {
      results: 'some results',
    },
  };
  const errorMock = { message: 'Internal server error' };
  it('should return initial state if no action type provided', () => {
    const res = bookmarkReducer(initialState, {});
    expect(res).toEqual({
      bookmarkPending: false,
      bookmarkStatus: {},
      bookmarkError: null,
    });
  });
  it('should update pending state to true', () => {
    const fetchBookmarkAction = {
      type: actionTypes.BOOKMARK_PENDING,
    };
    const res = bookmarkReducer(initialState, fetchBookmarkAction);
    expect(res).toMatchObject({ bookmarkPending: true });
  });
  it('should update fechmy bookmark status to error if it fail', () => {
    const fetchBookmarkAction = {
      type: actionTypes.FETCH_MY_BOOKMARKS__FAIL,
    };
    const res = bookmarkReducer(initialState, fetchBookmarkAction);
    expect(res).toMatchObject({ myBookmarkSuccess: 'fail' });
  });
  it('should update fech my bookmarks state when request successful', () => {
    const fetchBookmarkAction = {
      type: actionTypes.FETCH_MY_BOOKMARKS_SUCCESS,
      bookmarks: bookmarkResultMock,
    };
    const res = bookmarkReducer(initialState, fetchBookmarkAction);
    expect(res.myBookmarks).toMatchObject({
      data: {
        results: 'some results',
      },
    });
    expect(res.myBookmarkSuccess).toEqual('success');
  });
  it('should update bookmark state when request successful', () => {
    const fetchBookmarkAction = {
      type: actionTypes.BOOKMARK_SUCCESS,
      bookmarkStatus: bookmarkResultMock,
    };
    const res = bookmarkReducer(initialState, fetchBookmarkAction);
    expect(res.bookmarkStatus).toMatchObject({
      data: {
        results: 'some results',
      },
    });
    expect(res.bookmarkPending).toEqual(false);
  });
  it('should update bookmark error state when request fails', () => {
    const fetchSearchAction = {
      type: actionTypes.BOOKMARK_ERROR,
      bookmarkError: errorMock,
    };
    const res = bookmarkReducer(initialState, fetchSearchAction);
    expect(res.bookmarkError).toMatchObject({
      message: 'Internal server error',
    });
    expect(res.bookmarkPending).toEqual(false);
  });
});
