import * as actions from '../actionTypes';

const token = localStorage.getItem('token');
export const getUserNotificationsSuccess = (data) => ({
  type: actions.GET_NOTIFICATIONS_SUCCESS,
  payload: data,
});

export const updateNotificationsStatus = (notificationId) => (dispatch) => fetch(`${actions.BACKEND_URL}/api/v1/notifications/${notificationId}`, {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json',
    'x-access-token': token,
  },
}).then((res) => res.json()).then((response) => console.log('STATUS UPDATED', response));

export const getNotifications = () => (dispatch) => fetch(`${actions.BACKEND_URL}/api/v1/notifications/`, {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    'x-access-token': token,
  },
}).then((res) => res.json()).then((response) => dispatch(getUserNotificationsSuccess(response)));

