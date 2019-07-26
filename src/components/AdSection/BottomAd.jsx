// eslint-disable-next-line
import React from 'react';

import ImageContainer from '../ImageContainer/ImageContainer';
import AdContent from './AdContent';

import './Ad.scss';

import { imageData, bottomFirstNews, bottomSecondNews } from '../../utils/adData';

const BottomAd = (props) => {
	return (
    <>
      <div className="bottom-ad-style">
        <div className="news-content">
          <AdContent
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
          />
        </div>
      </div>
    </>
	);
};

export default BottomAd;
