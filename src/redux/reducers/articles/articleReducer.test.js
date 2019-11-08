import articleReducer from './articleReducer';
import * as actionTypes from '../../actions/actionTypes';
import initialState from '../../store/initialState';

describe('article ore options Reducers', () => {
  it('should dispach success  when article deleted', () => {
    const res = articleReducer(initialState, {
      type: actionTypes.DELETE_ARTICLE_SUCCESS,
    });
    expect(res).toMatchObject({ articleDeleted: true });
  });
  it('should dispach success  when article reported', () => {
    const res = articleReducer(initialState, {
      type: actionTypes.REPORT_SUCCESS,
      reportMessage: { reason: 'Harassment' },
    });
    expect(res).toMatchObject({ articleReportMessage: { reason: 'Harassment' } });
  });
  it('should dispach pending  when article report request is not yet processed', () => {
    const res = articleReducer(initialState, {
      type: actionTypes.REPORT_PENDING,
    });
    expect(res).toMatchObject({ articleReportPending: true });
  });
  it('should dispach pending  when article report request fails', () => {
    const res = articleReducer(initialState, {
      type: actionTypes.REPORT_ERROR,
      reportError: 'Error message',
    });
    expect(res).toMatchObject({ articleReportError: 'Error message' });
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

