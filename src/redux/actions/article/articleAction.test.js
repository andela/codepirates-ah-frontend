import article from '../../../__mocks__/createdArticle';
import { fetchSucces } from '../../../__mocks__/window';
import {
  CreateArticleAction,
  successCreateArticleAction,
  failedCreateArticleAction,
} from './index';
import * as actionType from '../actionTypes';

const dispatch = jest.fn(() => ({ data: {} }));
describe('CreateArticle action', () => {
  it('should test CreateArticle', () => {
    const expectedAction = {
      type: actionType.CREATE_ARTICLE_SUCCESS,
      payload: article,
    };
    const action = successCreateArticleAction(article);
    expect(action).toEqual(expectedAction);
  });
  it('should test CreateArticle error', () => {
    const expectedAction = {
      type: actionType.CREATE_ARTICLE_FAIL,
      payload: article,
    };
    const action = failedCreateArticleAction(article);
    expect(action).toEqual(expectedAction);
  });
});
describe('Create article fetch', () => {
  it('Should test async create article action success', async () => {
    window.fetch = fetchSucces;
    const input = {
      title: 'Learn react',
      description: 'Leact with redux',
      body: 'You can know react',
    };
    const response = await CreateArticleAction(input)(dispatch);
    expect(response).toHaveProperty('data');
  });
});
