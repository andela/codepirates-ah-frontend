import userdata from '../../../__mocks__/registeredUser';
import { inAppNotificationsSuccess, EmailNotificationsSuccess } from './index';
import * as actionType from '../actionTypes';

const dispatch = jest.fn(() => ({ data: {} }));
describe('Signup action', () => {
  it('should test inApp opt in out action', () => {
    const expectedAction = {
      type: actionType.App_OPT_IN_OUT_SUCCESS,
      payload: userdata,
    };
    const action = inAppNotificationsSuccess(userdata);
    expect(action).toEqual(expectedAction);
  });
  it('should test email opt in out action', () => {
    const expectedAction = {
      type: actionType.Email_OPT_IN_OUT_SUCCESS,
      payload: userdata,
    };
    const action = EmailNotificationsSuccess(userdata);
    expect(action).toEqual(expectedAction);
  });
});
