import { toast } from 'react-toastify';

export const handleResponse = async (response) => {
  console.log(response);
  const data = await response.json();
  if (response.ok) {
    await toast.success(data.message);
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

export const handleLoggout = async (response) => {
  if (response.ok) {
    window.sessionStorage.clear();
    const data = await response.json();
    window.location = '/';
    return data;
  }
  return 'Network response was not ok.';
};
