import likeCommentAction, { likeActionCreatorSuccess, likeActionCreatorError } from '.';
import { likeAndUnlikeFetchSuccess, likeAndUnlikeFetchError, fetchSuccesUtil } from '../../../../__mocks__/window';
import * as actionTypes from '../../actionTypes';

const dispatch = jest.fn(() => ({ data: {} }));
const token = localStorage.getItem('token');

describe('LIKE A COMMENT', () => {
  it('should test like comment action creator on sucess', () => {
    const data = {
      message: { likesCount: 1, formattedLikeInfo: 'You like this comment' },
      status: 'success',
    };
    const commentId = 5;
    const expected = {
      type: actionTypes.LIKE_A_COMMENT_SUCCESS,
      payload: { ...data, commentId },
    };
    const action = likeActionCreatorSuccess(data, commentId);
    expect(action).toEqual(expected);
  });
  it('should test like comment action creator on error', () => {
    const error = {
      message: 'you already liked the comment',
      status: 'error',
    };
    const expected = {
      type: actionTypes.LIKE_A_COMMENT_ERROR,
      payload: error,
    };
    const action = likeActionCreatorError(error);
    expect(action).toEqual(expected);
  });
  it('should text the like action success', async () => {
    window.fetch = likeAndUnlikeFetchSuccess;
    const method = 'POST';
    const commentId = 5;
    const response = await likeCommentAction(method, commentId)(dispatch, token);
    expect(response).toHaveProperty('data');
  });
  it('should text the like action error', async () => {
    window.fetch = likeAndUnlikeFetchError;
    const method = 'POST';
    const commentId = 5;
    const response = await likeCommentAction(method, commentId)(dispatch, token);
    expect(response).toHaveProperty('data');
  });
  it('should text the like action server error', async () => {
    window.fetch = fetchSuccesUtil;
    const method = 'POST';
    const commentId = 5;
    const response = await likeCommentAction(method, commentId)(dispatch, token);
    expect(response.includes('server error')).toBeTruthy();
  });
});
