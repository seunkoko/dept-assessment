import React from 'react';

import { shallow } from 'enzyme';

import HeaderModal from '../HeaderModal';

describe('HeaderModal', () => {
	const component = shallow(<HeaderModal />);

	it('should render HeaderModal component', () => {
		expect(component).toMatchSnapshot();
  });
  
});