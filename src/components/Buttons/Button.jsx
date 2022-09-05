import React from "react";
import { Link } from "react-router-dom";
import { StyledBtn } from "./StyledButton";

export const Button = (props) => {
  const { type, classname, btntext, to } = props;
  return (
    <StyledBtn>
      <Link to="/" className={`btn ${classname}`}>
        {btntext}
      </Link>
    </StyledBtn>
  );
};
