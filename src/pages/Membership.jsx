import React from "react";
import { StyledMemberShip } from "../styles/StyledMemberShip";
import itemimg from "./../../public/images/item.svg";
import coverimg from "./../../public/images/membership.jpeg";

export const Membership = () => {
  return (
    <StyledMemberShip>
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
          <div className="membership-switch" data-active-price="monthly">
            <button data-price="monthly">Monthly</button>
            <button data-price="yearly">Yearly</button>
          </div>
        </div>
      </div>
    </StyledMemberShip>
  );
};
