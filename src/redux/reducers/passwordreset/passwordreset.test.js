// import React from 'react';
// import renderer from 'react-test-renderer';

import passwordReset from '.';

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
      const newState = passwordReset(state, { type: 'Message', update: { message: 'email sent' } });
      expect(newState).toEqual({ message: 'email sent' });
    });
  });
  describe('test response summary setting', () => {
    it('should set summary to "Password reset email sent" if successful', () => {
      const newState = passwordReset(state, { type: 'emailSent' });
      expect(newState).toEqual({ summary: 'Password reset email sent' });
    });
    it('should set summary to "Password reset successful" if successful', () => {
      const newState = passwordReset(state, { type: 'passwordReset' });
      expect(newState).toEqual({ summary: 'Password reset successful' });
    });
  });
  describe('test status setting', () => {
    it('should set status to success', () => {
      const newState = passwordReset(state, { type: 'Status', update: { status: 'success' } });
      expect(newState).toEqual({ status: 'success' });
    });
  });
  describe('test formData setting', () => {
    it('should email to the supplied', () => {
      const newState = passwordReset(state, { type: 'FormData', update: { email: 'mail1' } });
      expect(newState).toEqual({ email: 'mail1' });
    });
  });
});
