import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import mockedStore from '../../../__mocks__/store';
import mockedChildrenComments from '../../../__mocks__/mockChildrenComponent';
import CommentCardComponent from '.';

const renderComponent = (args) => {
  const defaultProps = {
    comment: '',
    timeCreated: '2 hours ago',
    commentedUser: 'username',
    commenterProfileImage: 'image',
    username: 'userone',
    image: 'image',
    commentId: 0,
    childrenComments: mockedChildrenComments,
  };
  const props = { ...defaultProps, ...args };
  // const mounted = mount(<CommentCard {...props} />);
  const shallowed = shallow(
    <Provider store={mockedStore}>
      <MemoryRouter>
        <CommentCardComponent {...props} />
      </MemoryRouter>
    </Provider>,
  );
  return { shallowed };
};

describe('comment comment card component for comment', () => {
  it('should test CommentCard', () => {
    const { shallowed: component } = renderComponent({
      comment: '',
      timeCreated: '2 hours ago',
      commentedUser: 'username',
      commenterProfileImage: 'image',
      username: 'userone',
      image: 'image',
      commentId: 0,
      childrenComments: mockedChildrenComments,
    });
    expect(component).toHaveLength(1);
    // expect(wrapper).toHaveLength(1);
  });
});
