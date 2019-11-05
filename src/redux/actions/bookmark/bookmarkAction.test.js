import * as bookmarkActions from './bookmarkAction';
import * as actionTypes from '../actionTypes';

describe('bookmark action', () => {
  it('should return right action type on bookmark results pending action', () => {
    expect(bookmarkActions.fetchBookmarkPending().type)
      .toEqual(actionTypes.BOOKMARK_PENDING);
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
