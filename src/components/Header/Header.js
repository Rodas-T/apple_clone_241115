import React, { useState } from 'react';
// import './Header.css';
import logo from "../../commonResource/images/icons/logo.png";
import search from "../../commonResource/images/icons/search-icon.png";
import cart from "../../commonResource/images/icons/cart.png";
import HeaderLink from './HeaderLink';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="nav-wrapper fixed-top">
      <div className="container">
        <nav className="navbar navbar-toggleable-sm navbar-expand-md">
          <button
            className="navbar-toggler navbar-toggler-right"
            type="button"
            data-toggle="collapse"
            data-target=".navbar-collapse"
			onClick={toggleDropdown}
          >
            ☰
          </button>
          <Link className="navbar-brand mx-auto" to="/" >
            <img className="logo" src={logo} alt="logo" />
          </Link>
          {/* Dropdown menu items only show on smaller screens and when logo is clicked */}
          <div className={`navbar-collapse collapse ${isDropdownOpen ? 'show' : ''}`}>
            <ul className="navbar-nav nav-justified w-100 nav-fill">
              <HeaderLink linkUrl="/mac" linkName="Mac" />
              <HeaderLink linkUrl="/iphone" linkName="iPhone" />
              <HeaderLink linkUrl="/ipad" linkName="iPad" />
              <HeaderLink linkUrl="/watch" linkName="Watch" />
              <HeaderLink linkUrl="/tv" linkName="TV" />
              <HeaderLink linkUrl="/music" linkName="Music" />
              <HeaderLink linkUrl="/support" linkName="Support" />
              <li className="nav-item">
                <Link className="nav-link js-scroll-trigger" to="/search/">
                  <img className="logo" src={search} alt="search" />
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link js-scroll-trigger" to="/cart/">
                  <img className="logo" src={cart} alt="cart" />
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
