import React, { useState } from "react";
import { Link } from "react-router-dom";
import { PricingCard } from "../components/cards/pricingCard/PricingCard";
import { Footer } from "../components/footer/Footer";
import { Header } from "../components/header/Header";
import { StyledMemberShip } from "../styles/StyledMemberShip";
import itemimg from "./../../public/images/item.svg";
import coverimg from "./../../public/images/membership.jpeg";

export const Membership = () => {
  const [switchBtn, setSwitchBtn] = useState("yearly");

  const monthly = () => {
    setSwitchBtn("monthly");
  };
  const yearly = () => {
    setSwitchBtn("yearly");
  };

  return (
    <StyledMemberShip>
      <Header />
      <div className="container">
        <div className="row">
          <div className="membership-section archive-section">
            <div className="archive-wrap">
              <div className="archive-container is-custom">
                <div className="archive-content is-custom">
                  <h1 className="archive-title">Membership</h1>
                  <p className="archive-description global-zigzag">
                    <img src={itemimg} alt="" /> Unlock full access to Okiro and
                    see the entire library of subscribers-only content & updates
                  </p>
                </div>
              </div>
            </div>
            <div className="archive-cover global-image">
              <img src={coverimg} alt="Membership" />
            </div>
          </div>
          <small className="membership-heading">Choose your plan</small>
          <div className="membership-switch" data-active-price={switchBtn}>
            <button data-price="monthly" onClick={monthly}>
              Monthly
            </button>
            <button data-price="yearly" onClick={yearly}>
              Yearly
            </button>
          </div>
          <div className="membership-cards">
            <PricingCard
              title="Free"
              desc="Sign up now to be notified of new content and support Okiro, help keep this site independent."
              price="0"
            />
            <PricingCard
              title="Premium"
              desc="Get access to the library of paid-members only posts."
              price="79"
            />
            <PricingCard
              title="Premium Plus"
              desc="Get access to everything."
              price="149"
            />
          </div>
          <small className="global-question">
            Already have an account?
            <Link to=""> Sign in</Link>
          </small>
        </div>
      </div>
      <Footer />
    </StyledMemberShip>
  );
};
