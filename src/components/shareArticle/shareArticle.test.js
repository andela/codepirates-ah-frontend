import React from 'react';
import { mount } from 'enzyme';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import ShareArticle from '.';

global.fetch = require('node-fetch');

const mockStore = configureMockStore([thunk]);
const store = mockStore({
  viewArticle: {
    data: { slug: '' },
    sharedOnfacebbok: false,
  },
});

describe('Test share article', () => {
  const shareFunc = (args) => {
    const [share, handleClick] = Array(2).fill(jest.fn());
    const defaultProps = {
      share,
      handleClick,
      location: {
        root: 'https://codepirates.com',
        pathname: '/article/fakeslug',
      },
    };
    const props = { ...defaultProps, ...args };
    return mount(
      <Provider store={store}>
        <ShareArticle {...props} />
      </Provider>,
      { context: { store } },
    );
  };
  it('should display sharing icons', async () => {
    const wrapper = shareFunc();
    const facebook = wrapper.find('.fa-facebook-f');
    expect(facebook.length).toBe(1);
  });
  it('should fail to share on facebook', async () => {
    const fetchShare = jest.fn(() => Promise.resolve({
      status: 400,
    }));
    const wrapper = shareFunc({ fetchShare });
    const facebook = wrapper.find('.fa-facebook-f').first();
    facebook.simulate('click', { channel: 'facebook' });
    await wrapper
      .find('ShareArticle')
      .instance()
      .handleClick('facebook');
    expect(store.getState().viewArticle.sharedOnfacebbok).toBe(false);
  });
});
