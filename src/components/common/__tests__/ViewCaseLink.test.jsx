import React from 'react';

import { shallow } from 'enzyme';

import ViewCaseLink from '../ViewCaseLink';

describe('ViewCaseLink', () => {
	const component = shallow(<ViewCaseLink />);

	it('should render ViewCaseLink component', () => {
		expect(component).toMatchSnapshot();
  });
  
});