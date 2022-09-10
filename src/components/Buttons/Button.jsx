import React from "react";
import { StyledBtn } from "./StyledButton";
import { Link } from "react-router-dom";

export const Button = (props) => {
  const { classname, btntext, path } = props;
  return (
    <StyledBtn>
      <Link to="signup" className={`btn ${classname}`}>
        {btntext}
      </Link>
    </StyledBtn>
  );
};
