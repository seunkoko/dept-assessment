// eslint-disable-next-line
import React from 'react';

import ImageContainer from '../ImageContainer/ImageContainer';

import './NewsSection.scss';

const NewsSection = ({ data }) => {
	return (
    <>
      <div className="news-style">
        {
          data.map(news => {
            const newsToDisplay = <div
              className="news-item"
              key={news.id}
              >
                <ImageContainer
                  data={news}
                />
              </div>
            return newsToDisplay;
          })
        }
      </div>
    </>
	);
};

export default NewsSection;
