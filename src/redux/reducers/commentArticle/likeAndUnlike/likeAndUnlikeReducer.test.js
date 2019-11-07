import initialState from '../../../store/initialState';
import likeAndUnlikeReducer from '.';
import * as actionTypes from '../../../actions/actionTypes';


const mockedSuccessLikeResponse = {
  status: 'success',
  message: 'you unliked this comment successfully',
  counts: [
    {
      commentId: 5,
      formattedLikeInfo: 'admin, userthree, ',
      likesCount: 2,
    },
    {
      commentId: 6,
      formattedLikeInfo: 'admin ',
      likesCount: 1,
    },
  ],
};
const mockedErrorLikeResponse = {
  status: 'error',
  message: 'You liked this comment already',
};

const mockedFetchLikes = {
  data: {
    data: {
      commentId: 5,
      formattedLikeInfo: 'admin, userthree, ',
      likesCount: 2,
    },
  },
};
describe('LIKE ANB UNLIKE REDUCER', () => {
  it('should test default state', () => {
    const res = likeAndUnlikeReducer(initialState, {});
    expect(res).toMatchObject(initialState);
  });
  it('should test like on success reducer', () => {
    const commentId = 5;
    const res = likeAndUnlikeReducer(initialState, {
      type: actionTypes.LIKE_A_COMMENT_SUCCESS,
      payload: { ...mockedSuccessLikeResponse, commentId },
    });
    expect(res).toHaveProperty('counts');
  });
  it('should test like on error reducer', () => {
    const res = likeAndUnlikeReducer(initialState, {
      type: actionTypes.LIKE_A_COMMENT_ERROR,
      payload: mockedErrorLikeResponse,
    });
    expect(res).toHaveProperty('likes');
  });
  it('should test fetch all likes on success reducer', () => {
    const commentId = 5;
    const res = likeAndUnlikeReducer(initialState.likes, {
      type: actionTypes.FETCH_LIKES_SUCCESS,
      payload: { ...mockedFetchLikes, commentId },
    });
    expect(res).toHaveProperty('counts');
  });
  it('should test fetch all likes on error reducer', () => {
    const res = likeAndUnlikeReducer(initialState.likes, {
      type: actionTypes.FETCH_LIKES_ERROR,
      payload: mockedErrorLikeResponse,
    });
    expect(res).toHaveProperty('counts');
  });
});
