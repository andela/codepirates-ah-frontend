import { toast } from 'react-toastify';

const defaultProps = { location: { state: '' }, history: {} };
/**
 * This function displays a success toast after redirecting
 * @param {object} props
 */
export default (props = defaultProps) => {
  const { location: { state }, history } = props;
  if (state && state.message) {
    toast.success(state.message);
    delete state.message;
    history.replace({ ...history.location, state });
  }
};
