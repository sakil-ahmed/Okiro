import React from "react";
import { Subscribe } from "../components/footer/Subscribe";
import { Item } from "../components/home/Item";
import { StyledHome } from "./../styles/StyledHome";

export const Home = () => {
  return (
    <StyledHome>
      <div className="loop-section">
        <div className="container">
          <article>
            <Item />
          </article>
        </div>
      </div>

      {/* SubsCribe */}
      <div className="container">
        <Subscribe />
      </div>
    </StyledHome>
  );
};
