// eslint-disable-next-line
import React from 'react';

import './ClientSection.scss';

import abn from '../../assets/images/logos/ABN_logo_zwart.svg';
import adidas from '../../assets/images/logos/Adidas_logo_zwart.svg';
import klm from '../../assets/images/logos/KLM_logo_zwart.svg';
import microsoft from '../../assets/images/logos/Microsoft_logo_zwart-320x161.svg';
import mona from '../../assets/images/logos/Mona_logo_zwart.svg';
import nivea from '../../assets/images/logos/Nivea_logo_zwart.svg';
import nn from '../../assets/images/logos/NN_logo_zwart.svg';
import oxxio from '../../assets/images/logos/Oxxio_logo_zwart.svg';
import pathe from '../../assets/images/logos/Pathe_logo_zwart.svg';
import tomtom from '../../assets/images/logos/Tomtom_logo_zwart.svg';
import transavia from '../../assets/images/logos/Transavia_logo_zwart.svg';
import triumph from '../../assets/images/logos/Triumph_logo_zwart.svg';
import unilever from '../../assets/images/logos/Unilever_logo_zwart.svg';
import walibi from '../../assets/images/logos/Walibi_logo_zwart.svg';
import zalando from '../../assets/images/logos/Zalando_logo_zwart.svg';
import ziggo from '../../assets/images/logos/Ziggo_logo_zwart.svg';

const ClientSection = ({ id }) => {
	return (
    <>
      <div id={id} className="client-style">
        <p className="client-title">
          CLIENTS
        </p>
        <p className="client-description">
          We value a great working relationship with our clients 
          above all else. It’s why they often come to our parties. 
          It’s also why we’re able to challenge and inspire them to 
          reach for the stars.
        </p>

        <div className="client-logos">
          <div>
            <img src={nivea} alt="logo" />
          </div>
          <div>
            <img src={mona} alt="logo" />
          </div>
          <div>
            <img src={transavia} alt="logo" />
          </div>
          <div>
            <img src={zalando} alt="logo" />
          </div>

          <div>
            <img src={tomtom} alt="logo" />
          </div>
          <div>
            <img src={unilever} alt="logo" />
          </div>
          <div className="hide-on-phone">
            <img src={adidas} alt="logo" />
          </div>
          <div className="hide-on-phone">
            <img src={pathe} alt="logo" />
          </div>

          <div className="hide-on-phone">
            <img src={abn} alt="logo" />
          </div>
          <div className="hide-on-phone">
            <img src={triumph} alt="logo" />
          </div>
          <div className="hide-on-phone">
            <img src={microsoft} alt="logo" />
          </div>
          <div className="hide-on-phone">
            <img src={oxxio} alt="logo" />
          </div>

          <div className="hide-on-phone">
            <img src={nn} alt="logo" />
          </div>
          <div className="hide-on-phone">
            <img src={ziggo} alt="logo" />
          </div>
          <div className="hide-on-phone">
            <img src={walibi} alt="logo" />
          </div>
          <div className="hide-on-phone">
            <img src={klm} alt="logo" />
          </div>
        </div>
      </div>
    </>
	);
};

export default ClientSection;
