import React, { useState, useRef } from "react";
import { StyledSearch } from "./StyledSearch";
import { RiCloseFill } from "react-icons/ri";

export const Search = ({ handleSearchOpen }) => {
  const [change, setChange] = useState();
  const handleChange = (e) => {
    setChange(e.target.value);
    console.log(change);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <StyledSearch>
      <div className="close_icon">
        <RiCloseFill size="55px" fontWeight={900} onClick={handleSearchOpen} />
      </div>
      <div className="search_content">
        <form action="" onSubmit={handleSubmit}>
          <input
            onChange={handleChange}
            type="text"
            placeholder="Type your keywords"
            className="keywords"
            spellCheck="false"
          />
          <div className="search-meta">
            <span>
              {change
                ? "0 Results for your search"
                : "Please enter at least 1 characters"}
            </span>
          </div>
        </form>
      </div>
    </StyledSearch>
  );
};
