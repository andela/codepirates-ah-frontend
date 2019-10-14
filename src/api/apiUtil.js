import { toast } from 'react-toastify';

export const handleResponse = async (response) => {
  const data = await response.json();
  if (response.ok) {
    await toast.success(response.ok);
    return data;
  }
  if (data.status === 'error') {
    const error = await response.text();
    toast.success(data.message);
    return error;
  }
  return 'Network response was not ok.';
};

export const handleError = async (error) => {
  toast.error(error);
};
