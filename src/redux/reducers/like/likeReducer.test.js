import likeReducer from './likeReducer';
import * as actionTypes from '../../actions/actionTypes';

describe('Search reducer', () => {
  const initialState = {
    clapPending: false,
    claps: 0,
    clapError: null,
    dislikePending: false,
    dislikes: 0,
    dislikeError: null,
  };
  const claps = 12;
  const errorMock = { message: 'Internal server error' };
  it('should return initial state if no action type provided', () => {
    const res = likeReducer(initialState, {});
    expect(res).toEqual({
      clapPending: false,
      claps: 0,
      clapError: null,
      dislikePending: false,
      dislikes: 0,
      dislikeError: null,
    });
  });
  it('should update pending state to true', () => {
    const clapAction = {
      type: actionTypes.CLAP_PENDING,
    };
    const res = likeReducer(initialState, clapAction);
    expect(res).toMatchObject({ clapPending: true });
  });
  it('should update clap state when request successful', () => {
    const clapAction = {
      type: actionTypes.CLAP_SUCCESS,
      claps: 12,
    };
    const res = likeReducer(initialState, clapAction);
    expect(res).toMatchObject({
      claps,
    });
  });
  it('should update clap state when request successful', () => {
    const clapAction = {
      type: actionTypes.CLAP_ERROR,
      error: errorMock,
    };
    const res = likeReducer(initialState, clapAction);
    expect(res).toMatchObject({
      clapError: { message: 'Internal server error' },
    });
  });
  it('should update pending state to true', () => {
    const disLikeAction = {
      type: actionTypes.DISLIKE_PENDING,
    };
    const res = likeReducer(initialState, disLikeAction);
    expect(res).toMatchObject({ dislikePending: true });
  });
  it('should update clap state when request successful', () => {
    const disLikeAction = {
      type: actionTypes.DISLIKE_SUCCESS,
      dislikes: 12,
    };
    const res = likeReducer(initialState, disLikeAction);
    expect(res).toMatchObject({
      dislikes: 12,
    });
  });
  it('should update clap state when request successful', () => {
    const clapAction = {
      type: actionTypes.DISLIKE_ERROR,
      error: errorMock,
    };
    const res = likeReducer(initialState, clapAction);
    expect(res).toMatchObject({
      dislikeError: { message: 'Internal server error' },
    });
  });
});
