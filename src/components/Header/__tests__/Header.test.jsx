import React from 'react';

import { shallow } from 'enzyme';

import Header from '../Header';

describe('Header', () => {
	const component = shallow(<Header />);

	it('should render Header component', () => {
		expect(component).toMatchSnapshot();
  });
  
});