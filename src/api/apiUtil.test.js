import {
  handleLoggout,
  handleError,
  handleResponse,
} from './apiUtil';

describe('Testing api utils ', () => {
  it('should handle a response', async () => {
    const response = JSON.stringify({
      ok: true,
      user: {
        token: 'string',
        username: 'adafia',
      },
    });
    await handleResponse(response);
  });

  it('should handle an error', async () => {
    const error = 'API call failed.';
    await handleError(error);
  });

  it('should handle user loggout action', async () => {
    const response = JSON.stringify({
      ok: true,
      user: {},
    });
    await handleLoggout(response);
  });
});
