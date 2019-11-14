import userdata from '../../../__mocks__/registeredUser';
import { getUserNotificationsSuccess, inAppNotificationsSuccess, EmailNotificationsSuccess } from './index';
import * as actionType from '../actionTypes';


describe('Signup action', () => {
  it('should test notifications action', () => {
    const expectedAction = {
      type: actionType.GET_NOTIFICATIONS_SUCCESS,
      payload: userdata,
    };
    const action = getUserNotificationsSuccess(userdata);
    expect(action).toEqual(expectedAction);
  });
});
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
