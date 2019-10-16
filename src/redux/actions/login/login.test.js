import userdata from '../../../__mocks__/loggedInUser';
import { fetchError, fetchSuccessfully, fetchClientError } from '../../../__mocks__/window';
import loginAction, { succesfulLoginAction, failedLoginAction } from '.';
import * as actionType from '../actionTypes';

const dispatch = jest.fn(() => ({ data: {} }));
describe('Login action', () => {
  it('should test login action', () => {
    const expectedAction = {
      type: actionType.LOGIN_SUCCESS,
      payload: userdata,
    };
    const action = succesfulLoginAction(userdata);
    expect(action).toEqual(expectedAction);
  });
  it('should test login error', () => {
    const expectedAction = {
      type: actionType.LOGIN_ERROR,
      payload: userdata,
    };
    const action = failedLoginAction(userdata);
    expect(action).toEqual(expectedAction);
  });
});

describe('Login fetch', () => {
  it('Should test async login action success', async () => {
    window.fetch = fetchSuccessfully;
    const input = {
      email: 'aaaa@gmail.com',
      password: 'ASqw12435',
    };
    const response = await loginAction(input)(dispatch);
    expect(response).toHaveProperty('data');
  });
  it('Should test async login client action error', async () => {
    window.fetch = fetchClientError;
    const input = {
      email: 'aaaa@gmail.com',
      password: 'ASqw123dff',
    };
    const response = await loginAction(input)(dispatch);
    expect(response).toHaveProperty('data');
  });
  it('Should test async login server action error', async () => {
    window.fetch = fetchError;
    const input = {
      email: 'aaaa@gmail.com',
      password: 'ASqw123dff',
    };
    const response = await loginAction(input)(dispatch);
    expect(response.includes('server error')).toBeTruthy();
  });
});
