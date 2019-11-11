import * as bookmarkActions from './bookmarkAction';
import * as actionTypes from '../actionTypes';

describe('bookmark action', () => {
  it('should return right action type on bookmark results pending action', () => {
    expect(bookmarkActions.fetchBookmarkPending().type)
      .toEqual(actionTypes.BOOKMARK_PENDING);
  });
  it('should return right action type on bookmark results failing action ', () => {
    expect(bookmarkActions.fetchFail().type)
      .toEqual(actionTypes.FETCH_MY_BOOKMARKS__FAIL);
  });
  it('should return right action type on successfly bookmark action', () => {
    const bookmarkStatus = {
      articleId: 1,
    };
    expect(bookmarkActions.fetchBookmarkSuccess(bookmarkStatus).type)
      .toEqual(actionTypes.BOOKMARK_SUCCESS);
    expect(bookmarkActions.fetchBookmarkSuccess(bookmarkStatus).bookmarkStatus)
      .toEqual(bookmarkStatus);
  });
  it('should return right action type on successfly bookmark action', () => {
    const bookmarks = {
      articleId: 1,
    };
    expect(bookmarkActions.fetchSuccess(bookmarks).type)
      .toEqual(actionTypes.FETCH_MY_BOOKMARKS_SUCCESS);
    expect(bookmarkActions.fetchSuccess(bookmarks).bookmarks)
      .toEqual(bookmarks);
  });
  it('should return right action type  results error action', () => {
    const bookmarkError = {
      0: {
        message: 'Internal Server error',
      },
    };
    expect(bookmarkActions.fetchBookmarkError(bookmarkError).type)
      .toEqual(actionTypes.BOOKMARK_ERROR);
    expect(bookmarkActions.fetchBookmarkError(bookmarkError).bookmarkError)
      .toEqual(bookmarkError);
  });
});
