import * as actions from '../actionTypes';

const token = localStorage.getItem('token');

export const inAppNotificationsSuccess = (data) => ({
  type: actions.App_OPT_IN_OUT_SUCCESS,
  payload: data,
});

export const EmailNotificationsSuccess = (data) => ({
  type: actions.Email_OPT_IN_OUT_SUCCESS,
  payload: data,
});

export const inAppNotifications = () => (dispatch) => fetch(`${actions.BACKEND_URL}/api/v1/notifications/inApp`, {
  method: 'PATCH',
  headers: {
    'Content-Type': 'application/json',
    'x-access-token': token,
  },
}).then((res) => res.json()).then((response) => dispatch(inAppNotificationsSuccess(response)));

export const emailNotifications = () => (dispatch) => fetch(`${actions.BACKEND_URL}/api/v1/notifications/email`, {
  method: 'PATCH',
  headers: {
    'Content-Type': 'application/json',
    'x-access-token': token,
  },
}).then((res) => res.json()).then((response) => dispatch(EmailNotificationsSuccess(response)));

