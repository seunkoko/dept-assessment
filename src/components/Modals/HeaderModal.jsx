// eslint-disable-next-line
import React from 'react';

import { Link } from 'react-router-dom';

import './Modals.scss';


const HeaderModal = ({ handleModalLink }) => {
	return (
    <>
      <div
        className="modal header-modal-style"
        data-easein="bounce" 
        id="headerModal"
        tabIndex="-1"
        role="dialog"
        aria-hidden="true"
        backdrop="static"
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
                  <a href="#home" data-dismiss="modal" onClick={() => {handleModalLink('#home')}}><i className="fas fa-caret-right hm-caret-right"></i>HOME</a>
                </div>
                
                <div className="hm-div-line"></div>
              </div>

              <div className="hm-div-style">

                <div className="hm-menu-style">
                  <a href="#werk" data-dismiss="modal" onClick={() => {handleModalLink('#werk')}}><i className="fas fa-caret-right hm-caret-right"></i>WERK</a>
                </div>

              </div>

              <div className="hm-div-style">

                <div className="hm-menu-style">
                  <a href="#over" data-dismiss="modal" onClick={() => {handleModalLink('#over')}}><i className="fas fa-caret-right hm-caret-right"></i>OVER</a>
                </div>

              </div>

              <div className="hm-div-style">

                <div className="hm-menu-style">
                  <a href="#diensten" data-dismiss="modal" onClick={() => {handleModalLink('#diensten')}}><i className="fas fa-caret-right hm-caret-right"></i>DIENSTEN</a>
                </div>

              </div>

              <div className="hm-div-style">

                <div className="hm-menu-style">
                  <a href="#partners" data-dismiss="modal" onClick={() => {handleModalLink('#partners')}}><i className="fas fa-caret-right hm-caret-right"></i>PARTNERS</a>
                </div>
                
              </div>

              <div className="hm-div-style">

                <div className="hm-menu-style">
                  <a href="#stories" data-dismiss="modal" onClick={() => {handleModalLink('#stories')}}><i className="fas fa-caret-right hm-caret-right"></i>STORIES</a>
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
                  <a href="#vacatures" data-dismiss="modal" onClick={() => {handleModalLink('#vacatures')}}><i className="fas fa-caret-right hm-caret-right"></i>VACATURES</a>
                </div>
                
              </div>

              <div className="hm-div-style">

                <div className="hm-menu-style">
                  <a href="#events" data-dismiss="modal" onClick={() => {handleModalLink('#events')}}><i className="fas fa-caret-right hm-caret-right"></i>EVENTS</a>
                </div>
                
                <div className="hm-div-line"></div>
              </div>

              <div className="hm-div-style">

                <div className="hm-menu-style">
                  <a href="#contact" data-dismiss="modal" onClick={() => {handleModalLink('#contact')}}><i className="fas fa-caret-right hm-caret-right"></i>CONTACT</a>
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
