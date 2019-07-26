// eslint-disable-next-line
import React from 'react';
import { Link } from 'react-router-dom';

import ButtonViewCase from '../Button/ButtonViewCase';
import HeaderModal from '../Modals/HeaderModal';

import './Header.scss';

const Header = (props) => {
	return (
    <>
      <div className="container-fluid carousel-style">
        {/* Navigation */}
        <nav className="navbar fixed-top header-style scroll-style">
          <ul className="nav justify-content-between scroll-ul-style pl-0">
            <li className="nav-item pl-0"> 
              <Link className="nav-link" to="#">DEPT</Link>
            </li>
            
            <li className="nav-item">
              <Link
                className="nav-link menu-icon"
                to="#"
                data-toggle="modal"
                data-target="#headerModal"
              >
                <p className="mr-4">MENU</p>
                <div
                  className="bar-container"
                >
                  <div className="bar1"></div>
                  <div className="bar2"></div>
                </div>
              </Link>
            </li>
          </ul>
        </nav>

        <h1 className="carousel-text">WORK</h1>
      </div>
      <ButtonViewCase />

      {/* Modal */}
      <HeaderModal />
    </>
	);
};

export default Header;
