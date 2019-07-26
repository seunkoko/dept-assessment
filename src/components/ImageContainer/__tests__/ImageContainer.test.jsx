import React from 'react';

import { shallow } from 'enzyme';

import ImageContainer from '../ImageContainer';

import { imageData } from '../../../utils/adData';

describe('ImageContainer', () => {
	const component = shallow(<ImageContainer data={imageData} />);

	it('should render ImageContainer component', () => {
		expect(component).toMatchSnapshot();
  });
  
});