// import React from 'react';
// import renderer from 'react-test-renderer';

import passwordReset from '.';
import { RESET_PASSWORD_SUCCESS } from '../../actions/actionTypes';

let state;

describe('Password reset reducer', () => {
  beforeEach(state = () => ({
  }));
  describe('test response message setting', () => {
    it('should return initial state if unknown type ', () => {
      const newState = passwordReset(state, { type: 'unknown', update: {} });
      expect(newState).toEqual(state);
    });
    it('should set response message to "email sent"', () => {
      const newState = passwordReset(state, { type: RESET_PASSWORD_SUCCESS, update: { message: 'email sent' } });
      expect(newState).toEqual({ message: 'email sent' });
    });
  });
});
