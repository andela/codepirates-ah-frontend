import articleReducer from './articleReducer';
import * as actionTypes from '../../actions/actionTypes';
import initialState from '../../store/initialState';

describe('delete Reducers', () => {
  it('should dispach success  when article deleted', () => {
    const res = articleReducer(initialState, {
      type: actionTypes.DELETE_ARTICLE_SUCCESS,
    });
    expect(res).toMatchObject({ articleDeleted: true });
  });
  it('should dispach fail when delete artidle fails ', () => {
    const res = articleReducer(initialState, {
      type: actionTypes.DELETE_ARTICLE_FAIL,
    });
    expect(res).toMatchObject({ articleDeleted: false });
  });
});

describe('rate reducers ', () => {
  it('should dispach success  when article deleted', () => {
    const res = articleReducer(initialState, {
      type: actionTypes.RATE_ARTICLE_SUCCESS,
    });
    expect(res).toMatchObject({ articleRated: true });
  });
  it('should dispach fail when delete artidle fails ', () => {
    const res = articleReducer(initialState, {
      type: actionTypes.RATE_ARTICLE_FAIL,
    });
    expect(res).toMatchObject({ articleRated: false });
  });
});

