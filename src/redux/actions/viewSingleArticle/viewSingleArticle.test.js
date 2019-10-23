import userdata from '../../../__mocks__/registeredUser';
import { viewArticleSuccess } from './viewSingleArticleAction';
import * as actionType from '../actionTypes';

// const dispatch = jest.fn(() => ({ data: {} }));
describe('Signup action', () => {
  it('should test viewSingleArticle action', () => {
    const expectedAction = {
      type: actionType.VIEW_ARTICLE_SUCCESS,
      payload: userdata,
    };
    const action = viewArticleSuccess(userdata);
    expect(action).toEqual(expectedAction);
  });
});

