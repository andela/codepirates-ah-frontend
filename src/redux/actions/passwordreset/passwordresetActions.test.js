import { responseMessage } from '.';
import { RESET_PASSWORD_SUCCESS } from '../actionTypes';

describe('test password reset actions creators', () => {
  describe('test message creation', () => {
    it('should create supplied message and status', () => {
      const message = responseMessage('successful', 'Password reset link');
      expect(message).toEqual({
        type: RESET_PASSWORD_SUCCESS,
        update: { message: 'successful', title: 'Password reset link' },
      });
    });
  });
});
