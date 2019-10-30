import { mount } from 'enzyme';
import * as React from 'react';
import { Provider } from 'react-redux';

import configureMockStore from 'redux-mock-store';

import FeedBack from './index';

const mockStore = configureMockStore();
const store = mockStore({
  passwordReset: {
    success: {
      message: 'mikr',
      subject: 'email sent',
    },
  },
});

const feedBackFunc = () => {
  const props = {
    message: '',
    subject: '',
  };
  const enzymeWrapper = mount(
    <Provider store={store}>
      <FeedBack {...props} />
    </Provider>, { context: { store } },
  );
  return {
    props,
    enzymeWrapper,
  };
};

describe('<FeedBackContainer /> rendered', () => {
  it('should render the tick icon', () => {
    const { enzymeWrapper } = feedBackFunc();
    expect(enzymeWrapper.find('.tick').exists()).toBe(true);
  });
});
