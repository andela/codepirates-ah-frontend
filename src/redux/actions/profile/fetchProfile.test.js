import { fetchProfile, updateProfile, readReportedArticles } from './fetchProfile';
import { fetchError, fetchSuccess } from '../../../__mocks__/mockFetch';

const dispatch = jest.fn(() => ({ data: {} }));
const dispatchError = jest.fn(() => ({ error: {} }));
describe('profile calling backend services', () => {
  it('should update profile', async () => {
    window.fetch = fetchSuccess;
    const input = {
      bio: 'dd',
      username: 'dd',
      image: 'dd',
    };
    const response = await updateProfile(input)(dispatch);
    expect(response).toHaveProperty('data');
  });
  it('should throw if error occurs', async () => {
    window.fetch = fetchError;
    const input = {
      bio: 'dd',
      username: 'dd',
      image: 'dd',
    };
    const response = await updateProfile(input)(dispatchError);
    expect(response).toHaveProperty('error');
  });
  it('should throw if success occurs', async () => {
    window.fetch = fetchSuccess;
    const response = await readReportedArticles()(dispatch);
    expect(response).toHaveProperty('data');
  });
  it('should throw if fetchError occurs', async () => {
    window.fetch = fetchError;
    const response = await readReportedArticles()(dispatchError);
    expect(response).toHaveProperty('error');
  });
  it('should fetch profile data from authors haven API', async () => {
    window.fetch = fetchSuccess;
    const response = await fetchProfile()(dispatch);
    expect(response).toHaveProperty('data');
  });
  it('should throw if error occurs', async () => {
    window.fetch = fetchError;
    const response = await fetchProfile()(dispatchError);
    expect(response).toHaveProperty('error');
  });
});
