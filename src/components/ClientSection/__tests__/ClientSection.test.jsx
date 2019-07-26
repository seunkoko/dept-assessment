import React from 'react';

import { shallow } from 'enzyme';

import ClientSection from '../ClientSection';

describe('ClientSection', () => {
	const component = shallow(<ClientSection />);

	it('should render ClientSection component', () => {
		expect(component).toMatchSnapshot();
  });
  
});