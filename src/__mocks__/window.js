export const fetchSuccesSignup = (...args) => new Promise((resolve) => {
  const res = {
    json: jest.fn(() => ({ args, status: 201 })),
  };
  return resolve(res);
});
export const fetchSucces = () => new Promise((resolve) => {
  const res = {
    json: () => new Promise((resol) => resol({
      status: 201,
    })),
  };
  return resolve(res);
});
export const fetchSuccesArticles = () => new Promise((resolve) => {
  const res = {
    // json: jest.fn(() => ({ args, status: 200 })),
    json: () => new Promise((resol) => resol({
      status: 200,
    })),
  };
  return resolve(res);
});
export const fetchSuccessfully = (...args) => new Promise((resolve) => {
  const res = {
    json: jest.fn(() => ({ args, status: 200 })),
  };
  return resolve(res);
});
export const fetchSignUpAccountError = () => new Promise((resolve, reject) => {
  const res = {
    status: 500,
    message: 'Server error',
  };
  return reject(res);
});

export const fetchSignupAccountNotContent = () => new Promise((resolve) => {
  const res = {
    json: () => new Promise((resol) => resol({
      status: 203,
    })),
  };
  return resolve(res);
});

export const fetchVerifyAccount = () => new Promise((resolve) => {
  const res = {
    json: () => new Promise((resol) => resol({
      status: 200,
      message: 'verification is successful',
    })),
  };
  return resolve(res);
});
export const fetchVerifyAccountNotContent = () => new Promise((resolve) => {
  const res = {
    json: () => new Promise((resol) => resol({
      status: 203,
    })),
  };
  return resolve(res);
});
export const fetchVerifyAccountError = () => new Promise((resolve, reject) => {
  const res = {
    status: 500,
    message: 'Server error',
  };
  return reject(res);
});

export const fetchErrorSignup = (...args) => new Promise((resolve, reject) => {
  const res = {
    json: jest.fn(() => ({ args, status: 400 })),
  };
  return reject(res);
});
export const fetchSuccesUtil = (...args) => new Promise((resolve) => {
  const res = {
    json: jest.fn(() => ({ args, status: 'success' })),
  };
  return resolve(res);
});
export const fetchClientError = (...args) => new Promise((resolve) => {
  const res = {
    json: jest.fn(() => ({ args, status: 404 })),
  };
  return resolve(res);
});

export const fetchError = (...args) => new Promise((resolve, reject) => {
  const res = {
    json: jest.fn(() => ({ args, status: 500 })),
  };
  return reject(res);
});

export default window;
