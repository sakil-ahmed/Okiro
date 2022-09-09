import React from "react";
import { StyledPricingCard } from "./StyledPricing";
import { Button } from "./../../Buttons/Button";

export const PricingCard = (props) => {
  const { title, desc, price, date } = props;
  return (
    <StyledPricingCard>
      <div className="membership-card-content">
        <h2 className="membership-card-title">{title}</h2>
        <h3 className="membership-card-price">
          <sup>$</sup>
          {price}
          <span>{price === 0 ? "" : "/y"}</span>
        </h3>
        <p className="membership-card-description">{desc}</p>
        <div className="membership-card-options">
          <ul>
            <li>Full access to posts for subscribers</li>
            <li>Weekly email newsletter</li>
          </ul>
        </div>
      </div>
      <div className="pricing-button">
        <Button btntext="Subscribe now" classname="pricing-Btn" />
      </div>
    </StyledPricingCard>
  );
};
