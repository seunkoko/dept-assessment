import React from 'react';

import { shallow } from 'enzyme';

import MessageSection from '../MessageSection';

describe('MessageSection', () => {
	const component = shallow(<MessageSection />);

	it('should render MessageSection component', () => {
		expect(component).toMatchSnapshot();
	});
	
	// it('should add `Other values` when Enter is pressed', () => {
	// 	const tree = shallow(<component />);

	// });
});