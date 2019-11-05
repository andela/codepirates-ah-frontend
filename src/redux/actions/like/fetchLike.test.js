import {
  getClaps, updateClaps, cancelClaps, dislikeArticle, getDislikes,
} from './fetchLike';
import { fetchError, fetchSuccess } from '../../../__mocks__/mockFetch';

const dispatch = jest.fn(() => ({ data: { status: 'dislike' } }));
const dispatchError = jest.fn(() => ({ error: 'error message' }));
describe('dislike and clapping calls to backend services', () => {
  describe('get claps', () => {
    localStorage.setItem('token', 'token');
    it('should call getclaps', async () => {
      window.fetch = fetchSuccess;
      const slug = 'fakeslug';
      const response = await getClaps(slug)(dispatch);
      expect(response).toHaveProperty('data');
    });
    it('should throw if error occurs', async () => {
      window.fetch = fetchError;
      const slug = 'fakeslug';
      const response = await getClaps(slug)(dispatchError);
      expect(response).toHaveProperty('error');
    });
  });
  describe('updateClaps', () => {
    localStorage.setItem('token', 'token');
    it('should call updateClaps', async () => {
      window.fetch = fetchSuccess;
      const slug = 'fakeslug';
      const response = await updateClaps(slug, 2)(dispatch);
      expect(response).toEqual(3);
    });
    it('should throw if error occurs', async () => {
      window.fetch = fetchError;
      const slug = 'fakeslug';
      await updateClaps(slug, 3)(dispatchError);
    });
  });
  describe('cancelClaps', () => {
    localStorage.setItem('token', 'token');
    it('should call cancelClaps', async () => {
      window.fetch = fetchSuccess;
      const slug = 'fakeslug';
      const response = await cancelClaps(slug)(dispatch);
      expect(response).toHaveProperty('data');
    });
    it('should throw if error occurs', async () => {
      window.fetch = fetchError;
      const slug = 'fakeslug';
      const response = await cancelClaps(slug)(dispatchError);
      expect(response).toHaveProperty('error');
    });
  });
  describe('dislikeArticle', () => {
    localStorage.setItem('token', 'token');
    it('should call dislikeArticle', async () => {
      window.fetch = fetchSuccess;
      const slug = 'fakeslug';
      await dislikeArticle(slug)(dispatch);
    });
    it('should throw if error occurs', async () => {
      window.fetch = fetchError;
      const slug = 'fakeslug';
      await dislikeArticle(slug)(dispatchError);
    });
  });
  describe('getDislikes', () => {
    localStorage.setItem('token', 'token');
    it('should call getDislikes', async () => {
      window.fetch = fetchSuccess;
      const slug = 'fakeslug';
      const response = await getDislikes(slug)(dispatch);
      expect(response).toHaveProperty('data');
    });
    it('should throw if error occurs', async () => {
      window.fetch = fetchError;
      const slug = 'fakeslug';
      const response = await getDislikes(slug)(dispatchError);
      expect(response).toHaveProperty('error');
    });
  });
});
