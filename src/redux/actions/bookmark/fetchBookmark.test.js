import { createBookmark, deleteBookmark } from './fetchBookmark';
import { fetchError, fetchSuccess } from '../../../__mocks__/mockFetch';

const dispatch = jest.fn(() => ({ data: {} }));
const dispatchError = jest.fn(() => ({ error: {} }));
describe('call backend service to return bookmark results', () => {
  it('should mock fetchservice call to the backend', async () => {
    window.fetch = fetchSuccess;
    const name = 'fakeslug';
    const articleId = 1;
    const response = await createBookmark(articleId, name)(dispatch);
    expect(response).toHaveProperty('data');
  });
  it('should mock fetchservice call to the backend in case of error', async () => {
    window.fetch = fetchError;
    const name = 'fakeslug';
    const articleId = 1;
    const response = await createBookmark(articleId, name)(dispatchError);
    expect(response).toHaveProperty('error');
  });
  it('should mock fetchservice call to the backend', async () => {
    window.fetch = fetchSuccess;
    const name = 'fakeslug';
    const response = await deleteBookmark(name)(dispatch);
    expect(response).toHaveProperty('data');
  });
  it('should mock fetchservice call to the backend in case of error', async () => {
    window.fetch = fetchError;
    const name = 'fakeslug';
    const response = await deleteBookmark(name)(dispatchError);
    expect(response).toHaveProperty('error');
  });
});
