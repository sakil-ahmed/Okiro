import React from "react";
import { StyledHeader } from "./StyledHeader";
import { Link } from "react-router-dom";
import { HiDotsHorizontal } from "react-icons/hi";
import { SUBMENU } from "./../../../routes";
import logo from "./../../../public/images/okiro.svg";

export const Header = () => {
  return (
    <StyledHeader>
      <div className="row">
        <div className="header_left">
          <nav className="nav">
            <ul>
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
                <HiDotsHorizontal />
                <ul className="sub_menu">
                  {SUBMENU.map(({ to, name }) => {
                    return (
                      <li className="sub_menu_item">
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
        <div className="header_cta"></div>
      </div>
    </StyledHeader>
  );
};
