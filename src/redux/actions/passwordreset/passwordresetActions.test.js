import {
  successfulResetRequest,
  failedResetRequest,
} from '.';
import { RESET_PASSWORD_SUCCESS, RESET_PASSWORD_FAILURE } from '../actionTypes';

describe('test password reset actions creators', () => {
  describe('test message creation', () => {
    it('should create supplied message and status', () => {
      const message = successfulResetRequest(
        'successful',
        'Password reset link',
      );
      expect(message).toEqual({
        type: RESET_PASSWORD_SUCCESS,
        payload: { message: 'successful', subject: 'Password reset link' },
      });
    });
    it('should call successfulResetRequest action if success', () => {
      const message = failedResetRequest('no email specified');
      expect(message).toEqual({
        type: RESET_PASSWORD_FAILURE,
        payload: { error: 'no email specified' },
      });
    });
  });
});
