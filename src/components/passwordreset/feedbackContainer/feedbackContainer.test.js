import { mount } from 'enzyme';
import * as React from 'react';
import { Provider } from 'react-redux';

import configureMockStore from 'redux-mock-store';

import FeedBack from './index';

const mockStore = configureMockStore();
const store = mockStore({
  passwordReset: {
    message: 'mikr',
    summary: 'email sent',
  },
});

const [message, summary] = new Array(2).fill(jest.fn());

const shallowSetup = () => {
  const props = {
    message,
    summary,
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
    const { enzymeWrapper } = shallowSetup();
    expect(enzymeWrapper.find('.tick').exists()).toBe(true);
  });
});
