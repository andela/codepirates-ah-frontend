import mock from 'jest-fetch-mock';

import { updateArticle, flashToast } from './actionHelpers';

global.fetch = mock;

describe('Test fetch helper', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });
  it('Should return the correct failure response', () => {
    const error = { status: 404, message: 'article not found' };
    fetch.mockResponseOnce(JSON.stringify(error));
    const [onSuccess, onFailure] = Array(2).fill(jest.fn());
    return updateArticle('fakeslug')
      .then(onSuccess)
      .catch(onFailure)
      .finally(() => {
        expect(onFailure.mock.calls[0][0]).toEqual(error);
      });
  });
  it('Should flash the correct toast', () => {
    const error = { status: 404, message: 'article not found' };
    const message = flashToast(error);
    expect(message.constructor).toBe(String);
  });
});
