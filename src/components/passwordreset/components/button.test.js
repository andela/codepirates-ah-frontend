import React from 'react';
import { shallow } from 'enzyme';
import Button from './button';

describe('test button component', () => {
  it('should test the button component', () => {
    shallow(<Button value="submit" />);
  });
});
