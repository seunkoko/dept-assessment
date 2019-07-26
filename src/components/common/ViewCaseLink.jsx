// eslint-disable-next-line
import React from 'react';
import { Link } from 'react-router-dom';

import './common.scss';

const ViewCaseLink = ({
  id,
  moreDescription,
  handleViewLinkCase,
}) => {
	return (
    <>
      <Link
        className="btn view-case-link"
        data-toggle="collapse"
        role="button"
        to={`#${id}`}
        data-target={`#${id}`}
        onClick={(event) => {handleViewLinkCase(event, `caret-${id}`)}}
        aria-expanded="false"
        aria-controls={id}
      >
        <i id={`caret-${id}`} className="fas fa-caret-right mr-2" />
        View Case
      </Link>

      <div className="collapse more-description" id={id}>
        <div className="">{ moreDescription }</div>
      </div>
    </>
	);
};

export default ViewCaseLink;
