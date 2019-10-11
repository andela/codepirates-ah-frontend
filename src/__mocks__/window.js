export const fetchSuccesSignup = (...args) => new Promise((resolve) => {
  const res = {
    json: jest.fn(() => ({ args, status: 201 })),

  };
  return resolve(res);
});
export const fetchSucces = (...args) => new Promise((resolve) => {
  const res = {
    json: jest.fn(() => ({ args, status: 200 })),
  };
  return resolve(res);
});

export const fetchErrorSignup = (...args) => new Promise((resolve, reject) => {
  const res = {
    json: jest.fn(() => ({ args, status: 400 })),
  };
  return reject(res);
});

export const fetchError = (...args) => new Promise((resolve, reject) => {
  const res = {
    json: jest.fn(() => ({ args, status: 500 })),
  };
  return reject(res);
});

export default window;
