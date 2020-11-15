import React from 'react';
import { mount, shallow } from 'enzyme';
import Nav from '../../src/components/Nav';

it('should contain the text "home"', () => {
  const wrapper = shallow(<Nav />);
  expect(wrapper.text()).toContain('Home');
});

it('should contain the text "Create User"', () => {
  const wrapper = shallow(<Nav />);
  expect(wrapper.text()).toContain('Create user');
});

it('should contain the text "Create Poll"', () => {
  const wrapper = shallow(<Nav />);
  expect(wrapper.text()).toContain('Create poll');
});

it('should contain the text "Results"', () => {
  const wrapper = shallow(<Nav />);
  expect(wrapper.text()).toContain('Results');
});
