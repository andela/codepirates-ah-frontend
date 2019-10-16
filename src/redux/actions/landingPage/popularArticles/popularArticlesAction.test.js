import popularArticlesAction, { displayPopularArticlesActionCreatorSuccess, displayPopularArticlesActionCreatorError } from '.';
import { fetchError, fetchSuccesUtil, fetchClientError } from '../../../../__mocks__/window';

const dispatch = jest.fn(() => ({ data: {} }));
describe('LANDING PAGE POPULAR ARTICLES ACTION', () => {
  const data = {
    status: 200,
    data: [{}],
    message: 'popular articles on authors haven',
  };
  const error = {
    status: 404,
    message: 'There are no articles',
  };
  it('should test landing page popular article action creator on sucess', () => {
    const action = displayPopularArticlesActionCreatorSuccess(data);
    expect(action.payload).toEqual(data);
  });
  it('should test landing page creator on failure', () => {
    const action = displayPopularArticlesActionCreatorError(error);
    expect(action.payload).toEqual(error);
  });
  it('Should test async landing page action success', async () => {
    window.fetch = fetchSuccesUtil;
    const response = await popularArticlesAction()(dispatch);
    expect(response).toHaveProperty('data');
  });
  it('Should test async landing page action success but with status code greater that 400', async () => {
    window.fetch = fetchClientError;
    const response = await popularArticlesAction()(dispatch);
    expect(response).toHaveProperty('data');
  });
  it('Should test async landing page action error', async () => {
    window.fetch = fetchError;
    const response = await popularArticlesAction()(dispatch);
    expect(response.includes('server error')).toBeTruthy();
  });
});
