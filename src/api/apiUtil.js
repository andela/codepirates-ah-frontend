import { toast } from 'react-toastify';

export const handleResponse = async (response) => {
  const data = await response.json();
  if (response.ok) {
    await toast.success(data.message);
    return data;
  }
  if (data.status === 'error') {
    await toast.error(data.message);
    return data;
  }
  await toast.error(data.message);
  return data;
};

export const handleError = async (error) => {
  await toast.error('something went wrong, contact admin');
  return error;
};
