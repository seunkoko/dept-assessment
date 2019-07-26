import React from 'react';

import { shallow } from 'enzyme';

import Home from '../Home';

describe('Home', () => {
	const component = shallow(<Home />);

	it('should render Home component', () => {
		expect(component).toMatchSnapshot();
  });
  
});