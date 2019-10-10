// import React from 'react';
// import renderer from 'react-test-renderer';

import { responseMessage, summary, setStatus, formData } from '.';

let state;

describe('Password reset reducer', () => {
  beforeEach(state = () => ({
  }));
  describe('test response message setting', () => {
    it('should return initial state if unknown type ', () => {
      const newState = responseMessage(state, { type: 'unknown', update: {} });
      expect(newState).toEqual(state);
    });
    it('should set response message to "email sent"', () => {
      const newState = responseMessage(state, { type: 'Message', update: { message: 'email sent' } });
      expect(newState).toEqual({ message: 'email sent' });
    });
  });
  describe('test response summary setting', () => {
    it('should set summary to "Password reset email sent" if successful', () => {
      const newState = summary(state, { type: 'emailSent' });
      expect(newState).toEqual({ summary: 'Password reset email sent' });
    });
    it('should set summary to "Password reset successful" if successful', () => {
      const newState = summary(state, { type: 'passwordReset' });
      expect(newState).toEqual({ summary: 'Password reset successful' });
    });
  });
  describe('test status setting', () => {
    it('should set status to success', () => {
      const newState = setStatus(state, { type: 'Status', update: { status: 'success' } });
      expect(newState).toEqual({ status: 'success' });
    });
  });
  describe('test formData setting', () => {
    it('should email to the supplied', () => {
      const newState = formData(state, { type: 'FormData', update: { email: 'mail1' } });
      expect(newState).toEqual({ email: 'mail1' });
    });
  });
});
