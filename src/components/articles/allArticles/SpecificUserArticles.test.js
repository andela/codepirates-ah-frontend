import React from 'react';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import SpecificUserArticles from './SpecificUserArticles';
import createStore from '../../../redux/store/index';

describe('Test React component test with Enzyme', () => {
  it('renders without crashing', () => {
    shallow(
      <Provider store={createStore}>
        <SpecificUserArticles />
      </Provider>,
    );
  });
});

describe('ViewSpecificUserArticles component test with Enzyme', () => {
  const componentFunc = (args) => {
    const defaultProps = {
      viewArticle: jest.fn(),
      getAllArticles: jest.fn(),
      match: {},
      history: {
        push: jest.fn(),
      },
    };
    const props = { ...defaultProps, ...args };
    return mount(
      <Provider store={createStore}>
        <SpecificUserArticles />
      </Provider>,
      { ...props },
    );
  };

  componentFunc();
  it('it should update state on component will receive props', () => {
    const wrapper = componentFunc();
    wrapper.setProps({
      getArticle: {
        data: {
          slug: '',
          title: '',
          description: '',
          body: '',
          readtime: '',
          createdAt: '',
          author: { firstname: '', lastname: '', image: '' },
        },
      },
    });
    expect(wrapper).toHaveLength(1);
  });
});
