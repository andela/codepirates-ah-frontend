import singleArticleReducer from './viewSingleArticleReducer';
import * as actionTypes from '../../actions/actionTypes';
import initialState from '../../store/initialState';

describe('Login Reducers', () => {
  it('should dispach success  when article is viewed', () => {
    const res = singleArticleReducer(initialState, {
      type: actionTypes.VIEW_ARTICLE_SUCCESS,
    });
    expect(res).toMatchObject({ isArticleViewed: true });
  });
  it('should dispach fail when view  artidle fails ', () => {
    const res = singleArticleReducer(initialState, {
      type: actionTypes.VIEW_ARTICLE_ERROR,
    });
    expect(res).toMatchObject({ isArticleViewed: false });
  });
});
