import userdata from '../../../__mocks__/registeredUser';
import { getUserNotificationsSuccess } from './index';
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
