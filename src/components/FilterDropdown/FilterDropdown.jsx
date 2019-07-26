// eslint-disable-next-line
import React from 'react';
import { Link } from 'react-router-dom';

import './FilterDropdown.scss';

const FilterDropdown = ({
  sectionId,
  data,
  displayName,
}) => {
	return (
    <>
      <div className="dropdown show dropdown-style">
        <Link 
          className="btn dropdown-toggle" 
          to="#"
          role="button" 
          id={sectionId}
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          {displayName}
        </Link>

        <div className="dropdown-menu" aria-labelledby={sectionId}>
          {
            data.map(action => {
              const actionToDisplay = <Link
                  className="dropdown-item" 
                  to="#"
                  key={action.id}
                >
                  {action.name}
                </Link>
              return actionToDisplay;
            })
          }
        </div>
      </div>
    </>
	);
};

export default FilterDropdown;
