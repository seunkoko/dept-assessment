// eslint-disable-next-line
import React from 'react';

import ImageContainer from '../ImageContainer/ImageContainer';
import AdContent from './AdContent';

import './Ad.scss';

import { imageData, bottomFirstNews, bottomSecondNews } from '../../utils/adData';

const BottomAd = ({
  id,
  handleViewLinkCase,
}) => {
	return (
    <>
      <div id={id} className="bottom-ad-style">
        <div className="news-content">
          <AdContent
            handleViewLinkCase={handleViewLinkCase}
            firstNews={bottomFirstNews}
            secondNews={bottomSecondNews}
          />
        </div>

        <div className="image-ad hide-on-phone">
          <ImageContainer
            data={
              {
                ...imageData,
                id: 'bottomAdDImage'
              }
            }
            handleViewLinkCase={handleViewLinkCase}
          />
        </div>
      </div>
    </>
	);
};

export default BottomAd;
