// eslint-disable-next-line
import React from 'react';

import FilterDropdown from '../FilterDropdown/FilterDropdown';
import NewsSection from '../NewsSection/NewsSection';
import TopAd from '../AdSection/TopAd';
import BottomAd from '../AdSection/BottomAd';
import Quote from '../common/Quote';
import ClientSection from '../ClientSection/ClientSection';
import MessageSection from '../MessageSection/MessageSection';
import Footer from '../Footer/Footer';

import './MainSection.scss';

import { workFilter, industryFilter } from '../../utils/filterData'
import {
  firstNewsData,
  secondNewsData,
  thirdNewsData,
  fourthNewsData,
} from '../../utils/news';


const MainSection = ({
  email,
  name,
  message,
  emailError,
  nameError,
  messageError,
  successMessage,
  handleAlertClose,
  handleOnChange,
  handleSubmitMessage,
}) => {
	return (
    <>
      <div className="container-fluid main-section-style">

        {/* Filter Section */}
        <div className="filter-style">
          <div>
            <p>Show me</p>
            <FilterDropdown
              sectionId={"all-work"}
              displayName={"all work"}
              data={workFilter}
            />
          </div>

          <div className="mr-0">
            <p>in</p>
            <FilterDropdown
              sectionId={"all-industries"}
              displayName={"all industries"}
              data={industryFilter}
            />
          </div>
        </div>

        {/* First News Section */}
        <NewsSection
          data={firstNewsData}
        />

        {/* Top Ad Section */}
        <TopAd />

        {/* Second News Section */}
        <NewsSection
          data={secondNewsData}
        />

        {/* Bottom Ad Section */}
        <BottomAd />

        {/* Third News Section */}
        <NewsSection
          data={thirdNewsData}
        />

        {/* Quote */}
        <Quote />

        {/* Fourth News Section */}
        <NewsSection
          data={fourthNewsData}
        />

        {/* Client Section */}
        <ClientSection />

        {/* Message Section */}
        <MessageSection
          email={email}
          name={name}
          message={message}
          emailError={emailError}
          nameError={nameError}
          messageError={messageError}
          successMessage={successMessage}
          handleAlertClose={handleAlertClose}
          handleOnChange={handleOnChange}
          handleSubmitMessage={handleSubmitMessage}
        />

        {/* Footer */}
        <Footer />
      </div>
    </>
	);
};

export default MainSection;
