import React from 'react';
import { shallow } from 'enzyme';
import PasswordReset from '.';

describe('Test password reset component', () => {
  it('should display the component', () => {
    shallow(<PasswordReset message="no email" handleChange={() => ''} handleSubmit={() => ''} />);
  });
});
