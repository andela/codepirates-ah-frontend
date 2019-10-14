export const fetchSuccess = (...args) => new Promise((resolve) => {
  const res = {
    json: jest.fn(() => ({ args, status: 201 })),
  };
  return resolve(res);
});

export const fetchError = (...args) => new Promise((resolve) => {
  const res = {
    json: jest.fn(() => ({ args, status: 'error' })),
  };
  return resolve(res);
});
