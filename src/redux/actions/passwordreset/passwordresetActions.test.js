import { formData, responseMessage, setStatus } from '.';

describe('test password reset actions creators', () => {
  describe('test message creation', () => {
    it('should create supplied message', () => {
      const action = responseMessage('successful');
      expect(action).toEqual({ type: 'Message', update: { message: 'successful' } });
    });
    it('should should set the status', () => {
      const action = setStatus('successful');
      expect(action).toEqual({ type: 'Status', update: { status: 'successful' } });
    });
    it('should set the formData', () => {
      const action = formData('mail@m.com', '12ad', '12ad');
      expect(action).toEqual({
        type: 'FormData',
        update: {
          email: 'mail@m.com',
          password: '12ad',
          confirmPassword: '12ad',
        },
      });
    });
  });
});
