import userdata from '../../../__mocks__/registeredUser';
import { fetchSucces, fetchSignUpAccountError, fetchSignupAccountNotContent } from '../../../__mocks__/window';
import { signupAction, failedSignUpAction, succesfulSignUpAction } from './signupAction';
import * as actionType from '../actionTypes';

const dispatch = jest.fn(() => ({ data: {} }));
describe('Signup action', () => {
  it('should test signup action', () => {
    const expectedAction = {
      type: actionType.SIGNUP_SUCCESS,
      payload: userdata,
    };
    const action = succesfulSignUpAction(userdata);
    expect(action).toEqual(expectedAction);
  });
  it('should test signup error', () => {
    const expectedAction = {
      type: actionType.SIGNUP_ERROR,
      payload: userdata,
    };
    const action = failedSignUpAction(userdata);
    expect(action).toEqual(expectedAction);
  });
});

describe('Signup fetch', () => {
  it('Should test async signup action success', async () => {
    window.fetch = fetchSucces;
    const input = {
      email: 'aaaa@gmail.com',
      password: 'Admin123445',
      firstname: 'Noah',
      lastname: 'Kalyesubula',
      username: 'Noahka',
    };
    const response = await signupAction(input)(dispatch);
    expect(response).toHaveProperty('data');
  });
});
describe('Signup fetch', () => {
  it('Should test async signup action success', async () => {
    window.fetch = fetchSignUpAccountError;
    const input = {
      email: 'aaaa@gmail.com',
      password: 'Admin123445',
      firstname: 'Noah',
      lastname: 'Kalyesubula',
      username: 'Noahka',
    };
    const response = await signupAction(input)(dispatch);
    expect(response).toHaveProperty('data');
  });
});

describe('Signup fetch', () => {
  it('Should test async signup action success', async () => {
    window.fetch = fetchSignupAccountNotContent;
    const input = {
      email: 'aaaa@gmail.com',
      password: 'Admin123445',
      firstname: 'Noah',
      lastname: 'Kalyesubula',
      username: 'Noahka',
    };
    const response = await signupAction(input)(dispatch);
    expect(response).toHaveProperty('data');
  });
});
