import React from "react";
import { StyledForm } from "./Styledform";
import { Link } from "react-router-dom";

export const GlobalForm = (props) => {
  const { heading, name, btntext, to, text } = props;
  return (
    <StyledForm>
      <form action="">
        <h1>{heading} Okiro</h1>
        {name ? <label htmlFor="name">Your name</label> : ""}
        {name ? (
          <input type="text" id="name" spellCheck="false" required />
        ) : (
          ""
        )}

        <label htmlFor="signup">Your email address</label>
        <input type="email" id="signup" required />
        <button className="global-button button-clone" type="submit">
          {btntext}
        </button>
        {text == 1 ? (
          <small className="global-question">
            Already have an account?
            <Link to={to}>Sign in</Link>
          </small>
        ) : (
          <small className="global-question">
            Don’t have an account yet?
            <Link to={to}>Sign up</Link>
          </small>
        )}
      </form>
    </StyledForm>
  );
};
