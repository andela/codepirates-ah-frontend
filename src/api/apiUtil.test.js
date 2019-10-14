import {
  handleError,
} from './apiUtil';

describe('Testing api utils ', () => {
  it('should handle an error', async () => {
    const error = 'API call failed.';
    await handleError(error);
  });
});
