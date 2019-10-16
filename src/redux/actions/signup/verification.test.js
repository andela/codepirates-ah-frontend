import userdata from '../../../__mocks__/registeredUser';
import { fetchVerifyAccount, fetchVerifyAccountError, fetchVerifyAccountNotContent } from '../../../__mocks__/window';
import { verifyAccount, verifySuccess, verifyFailed } from './verification';
import * as actionType from '../actionTypes';

const dispatch = jest.fn(() => ({ data: { status: 200 } }));
describe('Verification action', () => {
  it('should test verification action', () => {
    const expectedAction = {
      type: actionType.VERIFICATION_SUCCESS,
      payload: userdata,
    };
    const action = verifySuccess(userdata);
    expect(action).toEqual(expectedAction);
  });
  it('should test verification error', () => {
    const expectedAction = {
      type: actionType.VERIFICATION_FAILURE,
      payload: userdata,
    };
    const action = verifyFailed(userdata);
    expect(action).toEqual(expectedAction);
  });
  it('Should test fetch verify account action', async () => {
    window.fetch = fetchVerifyAccount;
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJhZG1pbkBnbWFpbC5jb20iLCJ1c2VybmFtZSI6ImFkbWluIiwicm9sZSI6ImFkbWluIiwidmVyaWZpZWQiOnRydWUsImlhdCI6MTU3MTA0OTAwMSwiZXhwIjoxNTcxMTM1NDAxfQ.WLcYO5fupkZao3u5zgOfdq8cLpw1mtIBGM69jt6_Ufk';
    const response = await verifyAccount(token)(dispatch);
    expect(response).toHaveProperty('data');
  });
  it('Should test fetch verify account action', async () => {
    window.fetch = fetchVerifyAccountError;
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJhZG1pbkBnbWFpbC5jb20iLCJ1c2VybmFtZSI6ImFkbWluIiwicm9sZSI6ImFkbWluIiwidmVyaWZpZWQiOnRydWUsImlhdCI6MTU3MTA0OTAwMSwiZXhwIjoxNTcxMTM1NDAxfQ.WLcYO5fupkZao3u5zgOfdq8cLpw1mtIBGM69jt6_Ufk';
    const response = await verifyAccount(token)(dispatch);
    expect(response).toHaveProperty('data');
  });
  it('Should test fetch verify account action', async () => {
    window.fetch = fetchVerifyAccountNotContent;
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJhZG1pbkBnbWFpbC5jb20iLCJ1c2VybmFtZSI6ImFkbWluIiwicm9sZSI6ImFkbWluIiwidmVyaWZpZWQiOnRydWUsImlhdCI6MTU3MTA0OTAwMSwiZXhwIjoxNTcxMTM1NDAxfQ.WLcYO5fupkZao3u5zgOfdq8cLpw1mtIBGM69jt6_Ufk';
    const response = await verifyAccount(token)(dispatch);
    expect(response).toHaveProperty('data');
  });
});
