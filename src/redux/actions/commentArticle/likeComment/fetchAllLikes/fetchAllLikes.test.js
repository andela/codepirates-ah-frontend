import fetchAllLikesThunk, { fetchLikesCreatorSuccess, fetchLikesCreatorError } from '.';
import { fetchAllLikesSuccess, likeAndUnlikeFetchError } from '../../../../../__mocks__/window';
import * as actionTypes from '../../../actionTypes';

const dispatch = jest.fn(() => ({ data: {} }));
const token = localStorage.getItem('token');

describe('FETCH ALL LIKES OF A COMMENT', () => {
  it('should test fetch likes action creator on sucess', () => {
    const data = {
      status: 'success',
      message: {
        data: {
          formattedLikeInfo: 'You like this comment',
          likesCount: 2,
        },
      },
    };
    const commentId = 5;
    const expected = {
      type: actionTypes.FETCH_LIKES_SUCCESS,
      payload: { ...data, commentId },
    };
    const action = fetchLikesCreatorSuccess(data, commentId);
    expect(action).toEqual(expected);
  });
  it('should test FETCH ALL LIKES action creator on error', () => {
    const error = {
      message: 'No likes fetched',
      status: 'error',
    };
    const expected = {
      type: actionTypes.FETCH_LIKES_ERROR,
      payload: error,
    };
    const action = fetchLikesCreatorError(error);
    expect(action).toEqual(expected);
  });
  it('should test fetch all likes thunk on success', async () => {
    window.fetch = fetchAllLikesSuccess;
    const commentId = 5;
    const response = await fetchAllLikesThunk(commentId)(dispatch, token);
    expect(response).toHaveProperty('data');
  });
  it('should test fetch all likes thunk on error', async () => {
    window.fetch = likeAndUnlikeFetchError;
    const commentId = 5;
    const response = await fetchAllLikesThunk(commentId)(dispatch, token);
    expect(response).toHaveProperty('data');
  });
});
