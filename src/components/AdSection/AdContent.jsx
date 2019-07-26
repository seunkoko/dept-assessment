// eslint-disable-next-line
import React from 'react';

import ViewCaseLink from '../common/ViewCaseLink';

import './Ad.scss';

const AdContent = ({
  firstNews,
  secondNews,
}) => {
	return (
    <>
      <div className="news-display">
        <div className="first-news">
          <div className="title">
            {firstNews.title}
          </div>

          <div className="description">
            {firstNews.news}
          </div>

          <div className="view-case-link">
            <ViewCaseLink
              id={firstNews.id}
              moreDescription={firstNews.moreDescription}
            />
          </div>
        </div>

        <div className="second-news">
          <div className="title">
            {secondNews.title}
          </div>

          <div className="description">
            {secondNews.news}
          </div>

          <div className="view-case-link">
            <ViewCaseLink
              id={secondNews.id}
              moreDescription={secondNews.moreDescription}
            />
          </div>
        </div>
      </div>
    </>
	);
};

export default AdContent;
