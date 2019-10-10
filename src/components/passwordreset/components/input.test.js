import React from 'react';
import { shallow } from 'enzyme';
import Input from './input';

describe('test button component', () => {
  it('should test the button component', () => {
    shallow(<Input name="email" type="email" handleChange={() => ''} />);
  });
});
