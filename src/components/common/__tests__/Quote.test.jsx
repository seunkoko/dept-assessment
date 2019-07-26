import React from 'react';

import { shallow } from 'enzyme';

import Quote from '../Quote';

describe('Quote', () => {
	const component = shallow(<Quote />);

	it('should render Quote component', () => {
		expect(component).toMatchSnapshot();
  });
  
});