import React from 'react';
import { shallow } from 'enzyme';
import Input from './input';

describe('test input element component', () => {
  it('should test the input component', () => {
    shallow(<Input name="email" type="email" handleChange={() => ''} />);
  });
});
