import { shallow } from 'enzyme';
import React from 'react';
import Model from './model';

describe('Button Component', () => {
  let wrapper;
  beforeAll(() => {
    wrapper = shallow(<Model />);
  });
  it('should render Model component', () => {
    shallow(<Model />);
  });
  it('should find Fragment', () => {
    const fragment = wrapper.find('Fragment');
    expect(fragment.length).toEqual(1);
  });
});
