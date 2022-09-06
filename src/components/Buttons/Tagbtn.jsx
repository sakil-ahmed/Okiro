import React from "react";
import { Link } from "react-router-dom";
import { StyledTagbtn } from "./StyledTagbtn";

export const Tagbtn = ({ btntext }) => {
  return (
    <StyledTagbtn>
      <Link to="">{btntext}</Link>
    </StyledTagbtn>
  );
};
