import React from 'react';
import { shallow } from 'enzyme';
import ResetRequest from '.';

describe('Test reset request component', () => {
  it('should test the component', () => {
    shallow(<ResetRequest email="a@b.com" message="invalid email" handleChange={() => ''} handleSubmit={() => ''} />);
  });
});
