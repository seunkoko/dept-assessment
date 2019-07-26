import React from 'react';

import { shallow } from 'enzyme';

import MainSection from '../MainSection';

describe('MainSection', () => {
	const component = shallow(<MainSection />);

	it('should render MainSection component', () => {
		expect(component).toMatchSnapshot();
  });
  
});