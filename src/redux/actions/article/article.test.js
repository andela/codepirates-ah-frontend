import * as actionTypes from '../actionTypes';
import * as article from './article';
import { fetchSucces } from '../../../__mocks__/window';

const dispatch = jest.fn(() => ({ data: {} }));
describe(' delete article action', () => {
  it('should return an action if authSucces is triggered for Google new user',
    () => {
      expect(article.deleteSuccess()).toEqual({
        type: actionTypes.DELETE_ARTICLE_SUCCESS,
      });
    });
  it('should return type null if authFail is triggered for fake type',
    () => {
      expect(article.deleteFail())
        .toEqual({
          type: actionTypes.DELETE_ARTICLE_FAIL,
        });
    });
  it('Should delete article successfully', async () => {
    window.fetch = fetchSucces;
    const response = await article.deleteArticle('fakeslug')(dispatch);
    expect(response).toHaveProperty('data');
  });
});
describe(' rate article test', () => {
  it('should dispach action if rateSucces ',
    () => {
      expect(article.rateSuccess()).toEqual({
        type: actionTypes.RATE_ARTICLE_SUCCESS,
      });
    });
  it('should dispatch ratefail ',
    () => {
      expect(article.rateFail())
        .toEqual({
          type: actionTypes.RATE_ARTICLE_FAIL,
        });
    });
  it('Should rate article successfully', async () => {
    window.fetch = fetchSucces;
    const response = await article.postRatings('fakeslug', 2)(dispatch);
    expect(response).toHaveProperty('data');
  });
});

