// eslint-disable-next-line
import React from 'react';

import ViewCaseLink from '../common/ViewCaseLink';

import './ImageContainer.scss';

const ImageContainer = ({
  data,
  handleViewLinkCase,
}) => {
	return (
    <>
      <div className="image-display">
        <img src={data.image} alt="img" />
        <div className="image-title">
          {data.title}
        </div>
        <div className="image-description">
          {data.description}
        </div>
        
        <ViewCaseLink
          id={data.id}
          moreDescription={data.moreDescription}
          handleViewLinkCase={handleViewLinkCase}
        />
      </div>
    </>
	);
};

export default ImageContainer;
