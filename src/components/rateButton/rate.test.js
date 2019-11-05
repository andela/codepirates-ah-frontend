
import { shallow } from 'enzyme';
import React from 'react';
import { mapStateToProps, mapDispatchToProps, RateComponent } from './rate';

describe('## rate component ', () => {
  let wrapper;
  let props;
  beforeAll(() => {
    props = {
      article: {
        author: 'salvi',
      },
      user: {
        profile: {
          username: 'salvi',
        },
      },
    };
    wrapper = shallow(<RateComponent {...props} />);
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('should find a fragment ', () => {
    const redirect = wrapper.find('Fragment');
    expect(redirect.length).toEqual(1);
  });
});

describe('## rate Dispatch functions', () => {
  const state = {
    article: {
      author: 'salvi',
    },
    user: {
      profile: {
        username: 'salvi',
      },
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
