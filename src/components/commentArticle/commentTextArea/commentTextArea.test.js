import React from 'react';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import mockedStore from '../../../__mocks__/store';
import CommentTextAreaComponent, { CommentTextArea } from '.';

const renderComponent = (args) => {
  const defaultProps = {
    extendTextArea: '',
    onClick: () => {},
    image: '',
    username: '',
    commentId: '',
    history: {
      push: jest.fn(),
    },
  };
  const props = { ...defaultProps, ...args };
  const mounted = mount(<CommentTextArea {...props} />);
  const shallowed = shallow(
    <Provider store={mockedStore}>
      <MemoryRouter>
        <CommentTextAreaComponent {...props} />
      </MemoryRouter>
    </Provider>,
  );
  return { mounted, shallowed };
};

describe('comment textarea component for comment', () => {
  it('should test CommentTextArea', () => {
    const { shallowed: component, mounted: wrapper } = renderComponent({
      extendTextArea: '10px',
      onClick: () => {},
      image: 'image',
      username: 'username',
      commentId: 1,
    });
    const textArea = wrapper.find('textarea');
    textArea.simulate('click', {});
    textArea.simulate('change', {});
    const button = wrapper.find('#button');
    button.simulate('click', {});
    expect(component).toHaveLength(1);
  });
});
