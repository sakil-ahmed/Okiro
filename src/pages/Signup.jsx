import React from "react";
import { Link } from "react-router-dom";
import logo from "../../public/images/okiro.svg";

import { GlobalForm } from "../components/forms/GlobalForm";
import { StyledSignup } from "./../styles/StyledSignup";

export const Signup = () => {
  return (
    <StyledSignup>
      <div className="custom-wrap">
        <div className="custom-image global-bg-image"></div>
        <div className="custom-container">
          <div className="custom-logo">
            <Link to="/">
              <img src={logo} alt="" />
            </Link>
          </div>
          <GlobalForm
            heading="Get started with"
            name="name"
            btntext="Continue"
          />
        </div>
      </div>
    </StyledSignup>
  );
};
