// eslint-disable-next-line
import React from 'react';
import { Link } from 'react-router-dom';

import './Footer.scss';

import fblogo from '../../assets/images/logos/icon - fb.svg';
import twlogo from '../../assets/images/logos/icon - twitter.svg';
import inlogo from '../../assets/images/logos/icon - instagram.svg';


const Footer = (props) => {
	return (
    <>
      <footer className="page-footer footer-style">
        <div className="main-footer">
          <div className="footer-menu">
            <div className="footer-first-col hide-on-mobile">
              <p>
                DEPT
              </p>    
            </div>

            <div className="footer-second-col">
              <p><a href="#werk">WORK</a></p>

              <p><a href="#deinsten">SERVICE</a></p>

              <p><a href="#stories">STORIES</a></p>

              <p><a href="#partners">ABOUT</a></p>

              <p><a href="#vacatures">CAREERS</a></p>

              <p><a href="#contact">CONTACT</a></p>
            </div>

            <div className="footer-third-col">
              <img src={fblogo} alt="fb-logo" />
              <img src={twlogo} alt="tw-logo" />
              <img src={inlogo} alt="in-logo" />
            </div>
          </div>

          <div className="footer-copyright">
            <div className="footer-first-col hide-on-phone"></div>

            <div className="footer-second-col">
              <p>
                Chamber of Commerce: 63464101 
              </p>

              <p>
                VAT: NL 8552.47.502.B01 
              </p>

              <p>
                Terms and conditions
              </p>
            </div>

            <div className="footer-third-col">
              <p>
                © 2018 Dept Agency
              </p>
            </div>
          </div>

        </div>

        <div className="to-top hide-on-phone">
          <div id="return-to-top">
            <Link to="#">
              <i className="fas fa-long-arrow-alt-up"/>
              <p>
                TOP
              </p>
            </Link>
          </div>
        </div>
      </footer>
    </>
	);
};

export default Footer;
