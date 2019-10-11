import { shallow } from 'enzyme';
import React from 'react';
import Button from './Button';

describe('Button Component', () => {
  let wrapper;
  beforeAll(() => {
    wrapper = shallow(<Button />);
  });
  it('should render SocialButton', () => {
    shallow(<Button />);
  });
  it('should find Fragment', () => {
    const fragment = wrapper.find('Fragment');
    expect(fragment.length).toEqual(1);
  });
  it('should find button', () => {
    const socialbutton = wrapper.find('div');
    expect(socialbutton.length).toEqual(1);
  });
});
