import React from "react";
import { StyledSignin } from "./../styles/StyledSignin";
import { Link } from "react-router-dom";
import logo from "../../public/images/okiro.svg";
import { GlobalForm } from "./../components/forms/GlobalForm";
import bgimg from "../../public/images/signin.jpg";

export const Signin = () => {
  return (
    <StyledSignin>
      <div className="custom-wrap">
        <div className="custom-image global-bg-image">
          <img src={bgimg} alt="" />
        </div>
        <div className="custom-container">
          <div className="custom-logo">
            <Link to="/">
              <img src={logo} alt="" />
            </Link>
          </div>
          <GlobalForm
            heading="Sign in to"
            btntext="Send login link"
            to="/signup"
          />
        </div>
      </div>
    </StyledSignin>
  );
};
