import React from 'react';

import { shallow } from 'enzyme';

import Footer from '../Footer';

describe('Footer', () => {
	const component = shallow(<Footer />);

	it('should render Footer component', () => {
		expect(component).toMatchSnapshot();
  });
  
});