import React from 'react';
import { shallow } from 'enzyme';
import { MoreOnArticle, mapStateToProps, mapDispatchToProps } from './index';

describe('## more on article component ', () => {
  const renderMore = (args) => {
    const defaultProps = {
      cancelClaps: jest.fn(),
      slug: 'fakeslu',
      author: 'salvi',
      user: {
        profile: {
          username: 'salvi',
        },
        isLoggedIn: true,
      },
    };
    const props = { ...defaultProps, ...args };
    return shallow(<MoreOnArticle {...props} />);
  };
  it('should render more button ', () => {
    localStorage.setItem('token', 'ddd');
    const wrapper = renderMore();
    expect(wrapper).toHaveLength(1);
  });

  it('should simulate click event to delete', () => {
    window.localStorage.getItem = jest.fn(() => true);
    const wrapper = renderMore();
    const deleteButton = wrapper.find('.deleting');
    deleteButton.simulate('click');
    expect(wrapper).toHaveLength(1);
  });
});

describe('## more on article Dispatch functions', () => {
  const state = {
    article: {
      article: {
        slug: 'false',
        author: {
          username: '',
        },
      },
    },
    user: {
      profile: {
        username: 'false',
      },
      isLoggedIn: true,

    },
  };

  it('should be dispatch props', () => {
    expect(typeof mapDispatchToProps(state)).toEqual('object');
  });

  it('should be map state to props', () => {
    expect(mapStateToProps(state)).toEqual({
      user: state.user,
    });
  });
});
