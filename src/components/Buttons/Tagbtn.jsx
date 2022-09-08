import React from "react";
import { Link } from "react-router-dom";
import { StyledTagbtn } from "./StyledTagbtn";

export const Tagbtn = ({ btntext, btnclassname }) => {
  return (
    <StyledTagbtn>
      <Link to="" className={btnclassname}>
        {btntext}
      </Link>
    </StyledTagbtn>
  );
};
