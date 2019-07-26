import React from 'react';

import { shallow } from 'enzyme';

import AdContent from '../AdContent';

import { bottomFirstNews, bottomSecondNews } from '../../../utils/adData';

describe('AdContent', () => {
	const component = shallow(<AdContent firstNews={bottomFirstNews} secondNews={bottomSecondNews} />);

	it('should render AdContent component', () => {
		expect(component).toMatchSnapshot();
  });
  
});