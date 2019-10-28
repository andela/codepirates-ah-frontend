import { shallow } from 'enzyme';
import React from 'react';
import PopOver from './overlay';

describe('overlay component test', () => {
  let wrapper;
  beforeAll(() => {
    wrapper = shallow(<PopOver />);
  });
  it('should render Button', () => {
    shallow(<PopOver />);
  });
  it('should find Fragment', () => {
    const fragment = wrapper.find('Fragment');
    expect(fragment.length).toEqual(1);
  });
});
