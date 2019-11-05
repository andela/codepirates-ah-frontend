import * as likeActionCreators from './likeAction';

describe('thunk middleware function', () => {
  it('should return pending action type', () => {
    const actionType = 'CLAP_PENDING';
    expect(likeActionCreators.fetchClapPending().type).toEqual(actionType);
  });
  it('should return success action type', () => {
    const actionType = 'CLAP_SUCCESS';
    const claps = {
      claps: 1,
    };
    expect(likeActionCreators.fetchClapSuccess(claps).type).toEqual(actionType);
    expect(likeActionCreators.fetchClapSuccess(claps).claps).toEqual(claps);
  });
  it('should return error action type', () => {
    const actionType = 'CLAP_ERROR';
    const error = {
      message: 'Internal server error',
    };
    expect(likeActionCreators.fetchClapError(error).type).toEqual(actionType);
    expect(likeActionCreators.fetchClapError(error).error).toEqual(error);
  });

  it('should return pending action type', () => {
    const actionType = 'DISLIKE_PENDING';
    expect(likeActionCreators.fetchDislikePending().type).toEqual(actionType);
  });
  it('should return success action type', () => {
    const actionType = 'DISLIKE_SUCCESS';
    const dislikes = {
      dislikes: 0,
    };
    expect(likeActionCreators.fetchDislikeSuccess(dislikes).type).toEqual(actionType);
    expect(likeActionCreators.fetchDislikeSuccess(dislikes).dislikes).toEqual(dislikes);
  });
  it('should return error action type', () => {
    const actionType = 'DISLIKE_ERROR';
    const error = {
      message: 'Internal server error',
    };
    expect(likeActionCreators.fetchDislikeError(error).type).toEqual(actionType);
    expect(likeActionCreators.fetchDislikeError(error).error).toEqual(error);
  });
});
