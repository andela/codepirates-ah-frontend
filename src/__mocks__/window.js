export const fetchSucces = (...args) => new Promise((resolve) => {
  const res = {
    json: jest.fn(() => ({ args, status: 201 })),
  };
  return resolve(res);
});

export const fetchError = (...args) => new Promise((resolve, reject) => {
  const res = {
    json: jest.fn(() => ({ args, status: 400 })),
  };
  return reject(res);
});

export default window;
