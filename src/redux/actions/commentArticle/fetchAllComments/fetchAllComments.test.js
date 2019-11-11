import { fetchArticleCommentsActionCreatorSuccess, fetchArticleCommentsActionCreatorError } from '.';

describe('FETCH ALL ARTICLES ', () => {
  const data = {
    status: 'success',
    data: [{}],
    message: 'All comments on authors haven',
  };
  const error = {
    status: 'error',
    message: 'There are no articles',
  };
  it('should test comment page action creator on sucess', () => {
    const action = fetchArticleCommentsActionCreatorSuccess(data);
    expect(action.payload).toEqual(data);
  });
  it('should test comment page creator on failure', () => {
    const action = fetchArticleCommentsActionCreatorError(error);
    expect(action.payload).toEqual(error);
  });
});
