import { BASE_URL, VERSION } from '../redux/actions/actionTypes';

const resetRequest = async (ref) => {
  const token = (new URLSearchParams(ref.props.location.search)).get('token');
  const { message, ...formData } = ref.state;
  const [url, method] = ref.props.location.search ? [`/${token}`, 'put']
    : ['', 'post'];
  return fetch(`${BASE_URL}/api/${VERSION}/users/reset${url}`, {
    method,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },

    body: JSON.stringify(
      formData,
    ),
    mode: 'cors',
  });
};

export default resetRequest;
