import React, { useRef } from "react";
import { StyledHeader } from "./StyledHeader";
import { Link } from "react-router-dom";
import { HiDotsHorizontal } from "react-icons/hi";
import { FaSearch } from "react-icons/fa";
import { SUBMENU } from "./../../../routes";
import logo from "./../../../public/images/okiro.svg";
import { Button } from "../Buttons/Button";

export const Header = () => {
  const dropdown = useRef();
  const handleDropdown = () => {
    dropdown.current.classList.toggle("dropdown_handle");
    console.log(dropdown.current);
  };
  // document.body.addEventListener("click", () => {
  //   dropdown.current.classList.remove("dropdown_handle");
  // });

  return (
    <StyledHeader>
      <div className="row">
        <div className="header_left">
          <nav className="nav">
            <ul className="menu">
              <li className="menu_item">
                <Link to="">Home</Link>
              </li>
              <li className="menu_item">
                <Link to="">Membership</Link>
              </li>
              <li className="menu_item">
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
                      <li key={i} className="sub_menu_item">
                        <Link to={to}>{name}</Link>
                      </li>
                    );
                  })}
                </ul>
              </li>
            </ul>
          </nav>
        </div>
        <div className="header_middle">
          <div className="logo">
            <img src={logo} alt="Okoira Logo" />
          </div>
        </div>
        <div className="header_cta">
          <div className="header_cta_wrapper">
            <div className="search_icon">
              <FaSearch size="18px" fontWeight="900" />
            </div>
            <div className="sign_in">
              <Link to="/">Sign in</Link>
            </div>
            <div className="sign_up">
              <Button btntext="Sign up" />
            </div>
          </div>
        </div>
      </div>
    </StyledHeader>
  );
};
