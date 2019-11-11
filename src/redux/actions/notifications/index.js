import * as actions from '../actionTypes';

const token = localStorage.getItem('token');
// export const viewArticleSuccess = (data) => ({
//   type: actions.VIEW_ARTICLE_SUCCESS,
//   payload: data,
// });
console.log('token', token);
const notifications = () => fetch(`${actions.BACKEND_URL}/api/v1/notifications/inApp`, {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    'x-access-token': token,
  },
}).then((res) => res.json()).then((response) => {
  console.log('notifications', response);
});

export default notifications;
