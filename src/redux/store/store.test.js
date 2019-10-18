import { succesfulLoginAction } from '../actions/login';
import userMockedData from '../../__mocks__/loggedInUser';
import store from '.';

describe('Store', () => {
  it('should handle actions', () => {
    const data = userMockedData;
    const action = succesfulLoginAction(data);
    const res = store.dispatch(action);
    const object = {
      type: 'LOGIN_SUCCESS',
      payload: {
        status: 200,
        message: 'welcome back admin',
        token:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZ…Dc2fQ.6rrDivGGvU2404lb3IYfW_KmqBi1IlZgffvQ53qNa-I',
      },
    };
    expect(res).toMatchObject(object);
  });
});
