// eslint-disable-next-line
import React from 'react';

import ImageContainer from '../ImageContainer/ImageContainer';

import './NewsSection.scss';

const NewsSection = ({
  data,
  id,
  handleViewLinkCase,
}) => {
	return (
    <>
      <div id={id} className="news-style">
        {
          data.map(news => {
            const newsToDisplay = <div
              className="news-item"
              key={news.id}
              >
                <ImageContainer
                  data={news}
                  handleViewLinkCase={handleViewLinkCase}
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
