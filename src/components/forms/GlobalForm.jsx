import React from "react";
import { StyledForm } from "./Styledform";
import { Link } from "react-router-dom";

export const GlobalForm = (props) => {
  const { heading, name, btntext } = props;
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
        <small className="global-question">
          Already have an account?
          <Link to="signin">Sign in</Link>
        </small>
      </form>
    </StyledForm>
  );
};
