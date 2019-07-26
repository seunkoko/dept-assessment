import React from 'react';

import { shallow } from 'enzyme';

import ButtonViewCase from '../ButtonViewCase';

describe('ButtonViewCase', () => {
	const component = shallow(<ButtonViewCase />);

	it('should render ButtonViewCase component', () => {
		expect(component).toMatchSnapshot();
  });
  
});