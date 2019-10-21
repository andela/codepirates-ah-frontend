import articles from '../../../__mocks__/ViewSpecifiUserArticles';
import {
  viewSpecificUserArticlesSuccess,
  viewSpecificUserArticlesFail,
} from './ViewSpecifiUserArticles';
import * as actionType from '../actionTypes';

describe('viewSpecificUserArticles action', () => {
  it('viewSpecificUserArticles', () => {
    const expectedAction = {
      type: actionType.VIEW_SPECIFIC_USER_ARTICLES_SUCCESS,
      payload: articles,
    };
    const action = viewSpecificUserArticlesSuccess(articles);
    expect(action).toEqual(expectedAction);
  });
  it('should test viewSpecificUserArticle error', () => {
    const expectedAction = {
      type: actionType.VIEW_SPECIFIC_USER_ARTICLES_FAIL,
      payload: articles,
    };
    const action = viewSpecificUserArticlesFail(articles);
    expect(action).toEqual(expectedAction);
  });
});
