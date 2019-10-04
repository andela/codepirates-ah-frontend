import React from 'react';
import { shallow } from 'enzyme';
import TextInput from './index';

describe('First React component test with Enzyme', () => {
  it('renders without crashing', () => {
    shallow(<TextInput />);
  });
});
