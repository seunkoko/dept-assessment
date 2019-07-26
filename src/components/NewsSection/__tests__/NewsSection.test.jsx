import React from 'react';

import { shallow } from 'enzyme';

import NewsSection from '../NewsSection';

import { firstNewsData } from '../../../utils/news';

describe('NewsSection', () => {
	const component = shallow(<NewsSection data={firstNewsData} />);

	it('should render NewsSection component', () => {
		expect(component).toMatchSnapshot();
  });
  
});