import React from "react";
import { StyledMmenu } from "./StyledMobile";
import { Link } from "react-router-dom";
import { Button } from "./../../Buttons/Button";
import { FaSearch } from "react-icons/fa";

const Mobile = [
  {
    to: "/",
    name: "Home",
  },
  {
    to: "membership",
    name: "Membership",
  },
  {
    to: "guide",
    name: "Style Guide",
  },
  {
    to: "featurs",
    name: "Featurs",
  },
  {
    to: "authors",
    name: "Authors",
  },
  {
    to: "tags",
    name: "Tags",
  },
  {
    to: "subscribe",
    name: "Subscribe",
  },
  {
    to: "contact",
    name: "Contact",
  },
  {
    to: "demos",
    name: "Demos",
  },
  {
    to: "theme",
    name: "Get Theme",
  },
  {
    to: "signin",
    name: "Sign in",
  },
];

export const MobileMenu = () => {
  return (
    <StyledMmenu>
      <ul>
        {Mobile.map(({ to, name }, i) => {
          return (
            <li key={i} className="dot">
              <Link to={to}>{name}</Link>
            </li>
          );
        })}
        <li>
          <Button btntext="Sign up" to="/" classname="mobile_btn" />
        </li>
        <li className="search_open">
          <span>Search</span>
          <FaSearch size="18px" fontWeight="900" />
        </li>
      </ul>
    </StyledMmenu>
  );
};
