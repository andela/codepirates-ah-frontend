import passwordResetReducer from '.';
import { RESET_PASSWORD_SUCCESS } from '../../actions/actionTypes';

let state;

describe('Password reset reducer', () => {
  beforeEach(state = () => ({
  }));
  describe('test response message setting', () => {
    it('should return initial state if unknown type ', () => {
      const newState = passwordResetReducer(state, { type: 'unknown', payload: {} });
      expect(newState).toEqual(state);
    });
    it('should set response message to "email sent"', () => {
      const newState = passwordResetReducer(state, { type: RESET_PASSWORD_SUCCESS, payload: { message: 'email sent', subject: 'mail sent' } });
      expect(newState.success.message).toEqual('email sent');
    });
  });
});
