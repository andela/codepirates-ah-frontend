import landingPageAction, { displayArticleActionCreator, displayArticleActionError } from '.';
import { fetchError, fetchSuccessfully, fetchClientError } from '../../../__mocks__/window';

const dispatch = jest.fn(() => ({ data: {} }));
describe('LANDING PAGE ACTION', () => {
  const data = {
    status: 200,
    data: [{}],
    message: 'All articles on authors haven',
  };
  const error = {
    status: 404,
    message: 'There are no articles',
  };
  it('should test landing page action creator on sucess', () => {
    const action = displayArticleActionCreator(data);
    expect(action.payload).toEqual(data);
  });
  it('should test landing page creator on failure', () => {
    const action = displayArticleActionError(error);
    expect(action.payload).toEqual(error);
  });
  it('Should test async landing page action success', async () => {
    window.fetch = fetchSuccessfully;
    const response = await landingPageAction()(dispatch);
    expect(response).toHaveProperty('data');
  });
  it('Should test async landing page action success but with status code greater that 400', async () => {
    window.fetch = fetchClientError;
    const response = await landingPageAction()(dispatch);
    expect(response).toHaveProperty('data');
  });
  it('Should test async landing page action error', async () => {
    window.fetch = fetchError;
    const response = await landingPageAction()(dispatch);
    expect(response.includes('server error')).toBeTruthy();
  });
});
