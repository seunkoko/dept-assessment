import React from 'react';

import { shallow } from 'enzyme';

import BottomAd from '../BottomAd';

describe('BottomAd', () => {
	const component = shallow(<BottomAd />);

	it('should render BottomAd component', () => {
		expect(component).toMatchSnapshot();
  });
  
});