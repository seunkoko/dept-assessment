import React from 'react';

import { shallow } from 'enzyme';

import FilterDropdown from '../FilterDropdown';

import { workFilter } from '../../../utils/filterData';

describe('FilterDropdown', () => {
	const component = shallow(<FilterDropdown data={workFilter} />);

	it('should render FilterDropdown component', () => {
		expect(component).toMatchSnapshot();
  });
  
});