// eslint-disable-next-line
import React from 'react';

import { Link } from 'react-router-dom';

import './Modals.scss';


const HeaderModal = (props) => {
	return (
    <>
      <div
        className="modal header-modal-style"
        data-easein="bounce" 
        id="headerModal"
        tabIndex="-1"
        role="dialog"
        aria-hidden="true"
        keyboard="true"
      >
        <div className="modal-dialog modal-full" role="document">
          <div className="modal-content header-modal-content">
            <div className="hm-header">
              <nav className="navbar header-style hm-style">
                <ul className="nav justify-content-between pl-0 no-underline">
                  <li className="nav-item pl-0"> 
                    <Link className="nav-link color-white pl-0" to="#">DEPT</Link>
                  </li>
                  
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    {/* <div className="bar-container">
                      <div className="hm-bar1 transition-bar-1"></div>
                      <div className="hm-bar2 transition-bar-2"></div>
                    </div> */}
                    <i className="fas fa-times color-white"></i>
                  </button>
                </ul>
              </nav>
            </div>
          
            <div className="hm-body">
              <div className="hm-div-style">
                <div className="hm-div-1-content hide-on-phone">
                  <p className="hide-on-phone">LANDEN</p>
                  <p className="hide-on-phone">GLOBAL</p>
                  <p className="hide-on-phone">
                    <i className="fas fa-caret-right hm-caret-right"></i>
                    NEDERLAND
                  </p>
                  <p className="hide-on-phone">UNITED STATES</p>
                  <p className="hide-on-phone">IRELAND</p>
                  <p className="hide-on-phone">UNITED KINGDOM</p>
                  <p className="hide-on-phone">DEUTSCHLAND</p>
                  <p className="hide-on-phone">SCHWEIZ</p>
                </div>

                <div className="hm-menu-style">
                  <i className="fas fa-caret-right hm-caret-right"></i>
                  HOME
                </div>
                
                <div className="hm-div-line"></div>
              </div>

              <div className="hm-div-style">

                <div className="hm-menu-style">
                  <i className="fas fa-caret-right hm-caret-right"></i>
                  WERK
                </div>

              </div>

              <div className="hm-div-style">

                <div className="hm-menu-style">
                  <i className="fas fa-caret-right hm-caret-right"></i>
                  OVER
                </div>

              </div>

              <div className="hm-div-style">

                <div className="hm-menu-style">
                  <i className="fas fa-caret-right hm-caret-right"></i>
                  DIENSTEN
                </div>

              </div>

              <div className="hm-div-style">

                <div className="hm-menu-style">
                  <i className="fas fa-caret-right hm-caret-right"></i>
                  PARTNERS
                </div>
                
              </div>

              <div className="hm-div-style">

                <div className="hm-menu-style">
                  <i className="fas fa-caret-right hm-caret-right"></i>
                  STORIES
                </div>
                
                <div className="hm-div-line"></div>
              </div>

              <div className="hm-div-style">
                <div className="hm-div-7-content hide-on-phone">
                  <p className="hide-on-phone">FACEBOOK</p>
                  <p className="hide-on-phone">TWITTER</p>
                  <p className="hide-on-phone">INSTAGRAM</p>
                  <p className="hide-on-phone">LINKEDIN</p>
                </div>

                <div className="hm-menu-style">
                  <i className="fas fa-caret-right hm-caret-right"></i>
                  VACATURES
                </div>
                
              </div>

              <div className="hm-div-style">

                <div className="hm-menu-style">
                  <i className="fas fa-caret-right hm-caret-right"></i>
                  EVENTS
                </div>
                
                <div className="hm-div-line"></div>
              </div>

              <div className="hm-div-style">

                <div className="hm-menu-style">
                  <i className="fas fa-caret-right hm-caret-right"></i>
                  CONTACT
                </div>
                
                <div className="hm-div-line"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
	);
};

export default HeaderModal;
