// eslint-disable-next-line
import React from 'react';

import ImageContainer from '../ImageContainer/ImageContainer';
import AdContent from './AdContent';

import './Ad.scss';

import { imageData, topFirstNews, topSecondNews } from '../../utils/adData';

const TopAd = ({
  id,
  handleViewLinkCase,
}) => {
	return (
    <>
      <div id={id} className="top-ad-style">
        <div className="image-ad">
          <ImageContainer
            data={
              {
                ...imageData,
                id: 'topAdImage',
              }
            }
          />
        </div>

        <div className="news-content">
          <AdContent
            handleViewLinkCase={handleViewLinkCase}
            firstNews={topFirstNews}
            secondNews={topSecondNews}
          />
        </div>
      </div>
    </>
	);
};

export default TopAd;
