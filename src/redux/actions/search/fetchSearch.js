import { toast } from 'react-toastify';
import * as searchActionCreators from './searchAction';
import { BACKEND_URL, VERSION } from '../actionTypes';


export default (query, pagination) => async (dispatch) => {
  dispatch(searchActionCreators.fetchSearchResultsPending());
  try {
    let offset = '';
    if (pagination) {
      offset = '&offset=0&limit=3';
    }
    const res = await fetch(`${BACKEND_URL}/api/${VERSION}/search?q={"tag":"${query}","keyword":"${query}","user":"${query}"}${offset}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await res.json();
    if (data.status === 'error') {
      throw (data.error);
    }
    return dispatch(searchActionCreators.fetchSearchResultsSuccess(data.data));
  } catch (error) {
    toast.error(error);
    return dispatch(searchActionCreators.fetchSearchResultsError(error));
  }
};
