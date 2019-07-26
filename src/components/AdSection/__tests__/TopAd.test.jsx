import React from 'react';

import { shallow } from 'enzyme';

import TopAd from '../TopAd';

describe('TopAd', () => {
	const component = shallow(<TopAd />);

	it('should render TopAd component', () => {
		expect(component).toMatchSnapshot();
  });
  
});