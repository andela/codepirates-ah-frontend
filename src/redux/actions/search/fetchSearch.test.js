import fetchSearch from './fetchSearch';
import { fetchError, fetchSuccess } from '../../../__mocks__/mockFetch';

const dispatch = jest.fn(() => ({ data: {} }));
const dispatchError = jest.fn(() => ({ error: {} }));
describe('call backend service to return search results', () => {
  it('should mock fetchservice call to the backend', async () => {
    window.fetch = fetchSuccess;
    const response = await fetchSearch()(dispatch);
    expect(response).toHaveProperty('data');
  });
  it('should mock fetchservice call to the backend', async () => {
    window.fetch = fetchSuccess;
    const query = 'react';
    const pagination = true;
    const response = await fetchSearch(query, pagination)(dispatch);
    expect(response).toHaveProperty('data');
  });

  it('should throw if error occurs', async () => {
    window.fetch = fetchError;
    const response = await fetchSearch()(dispatchError);
    expect(response).toHaveProperty('error');
  });
});
