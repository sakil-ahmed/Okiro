import React from "react";
import { StyledSubscribe } from "./StyledSubscribe";
import { Button } from "./../Buttons/Button";

export const Subscribe = () => {
  return (
    <StyledSubscribe>
      <h3 className="subscribe">Subscribe to new posts</h3>
      <form action="" className="subscribe-form">
        <input
          type="email"
          placeholder="Your email address"
          aria-label="Your email address"
          required
        />
        <Button btntext="Subscribe" classname="subscribe_btn" />
      </form>
    </StyledSubscribe>
  );
};
