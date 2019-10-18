import ArticleReducer from './article.reducer';
import * as actionTypes from '../../actions/actionTypes';
import mockedResponse from '../../../__mocks__/createdArticle';
import initialState from '../../store/initialState';

const errorMockedResponse = {
  status: 400,
};
describe('Create article Reducer', () => {
  it('should return initialState when there is no action', () => {
    const res = ArticleReducer(initialState, {});
    expect(res).toMatchObject(initialState);
  });
  it('should return an updated state with data from database when article is created', () => {
    const res = ArticleReducer(initialState, {
      type: actionTypes.CREATE_ARTICLE_SUCCESS,
      payload: mockedResponse,
    });
    expect(res).toMatchObject({ isArticleCreated: true });
  });
  it('should return an error message when create article fails', () => {
    const res = ArticleReducer(initialState, {
      type: actionTypes.CREATE_ARTICLE_FAIL,
      payload: errorMockedResponse,
    });
    expect(res).toMatchObject({ isArticleCreated: false });
  });
});
