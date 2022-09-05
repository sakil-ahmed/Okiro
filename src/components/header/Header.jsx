import React, { useRef, useState } from "react";
import { StyledHeader } from "./StyledHeader";
import { Link } from "react-router-dom";
import { HiDotsHorizontal } from "react-icons/hi";
import { FaSearch } from "react-icons/fa";
import { SUBMENU } from "./../../../routes";
import logo from "./../../../public/images/okiro.svg";
import { Button } from "../Buttons/Button";
import { MobileMenu } from "./mobile/MobileMenu";
import { Search } from "./search/Search";

export const Header = () => {
  const dropdown = useRef();
  const menuClose = useRef();
  const menu_open = useRef();
  const handleDropdown = () => {
    dropdown.current.classList.toggle("dropdown_handle");
    console.log(dropdown.current);
  };
  const handleMenu = () => {
    menuClose.current.classList.toggle("close-toggle");
    menu_open.current.classList.toggle("menu_open");
  };

  // search handeller
  const [openSearch, setOpenSearch] = useState(false);
  const handleSearchOpen = () => {
    setOpenSearch(!openSearch);
  };

  return (
    <StyledHeader>
      <div className="header_container">
        <div className="row">
          {/* desktop navbar */}
          <div className="header_left">
            <nav className="nav">
              <ul className="menu">
                <li className="menu_item dot">
                  <Link to="">Home</Link>
                </li>
                <li className="menu_item dot">
                  <Link to="">Membership</Link>
                </li>
                <li className="menu_item dot">
                  <Link to="">Style Guide</Link>
                </li>
                <li className="menu_item dropdown">
                  <HiDotsHorizontal
                    size="30px"
                    fontWeight="900"
                    onClick={handleDropdown}
                  />
                  <ul ref={dropdown} className="sub_menu">
                    {SUBMENU.map(({ to, name }, i) => {
                      return (
                        <li key={i} className="sub_menu_item dot">
                          <Link to={to}>{name}</Link>
                        </li>
                      );
                    })}
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
          {/* Logo */}
          <div className="header_middle">
            <div className="logo">
              <img src={logo} alt="Okoira Logo" />
            </div>
          </div>
          {/* Mobile Menu bar */}
          <div className="mobile_menu_bar">
            <div ref={menuClose} className="toggle-btn" onClick={handleMenu}>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div ref={menu_open} className="mobile_menu_item">
              <MobileMenu handleSearchOpen={handleSearchOpen} />
            </div>
          </div>
          {/* Header Cta */}
          <div className="header_cta">
            <div className="header_cta_wrapper">
              <div className="search_icon" onClick={handleSearchOpen}>
                <FaSearch size="20px" fontWeight="900" />
              </div>
              <div className="sign_in">
                <Link to="/">Sign in</Link>
              </div>
              <div className="sign_up">
                <Button btntext="Sign up" />
              </div>
            </div>
          </div>
          {/* Search bar */}
          <div
            className={
              openSearch ? "popup_search_overlay open" : "popup_search_overlay"
            }
          >
            <Search handleSearchOpen={handleSearchOpen} />
          </div>
        </div>
      </div>
    </StyledHeader>
  );
};
