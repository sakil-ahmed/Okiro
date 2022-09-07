import React from "react";
import { Subscribe } from "../components/footer/Subscribe";
import { Item } from "../components/home/Item";
import { StyledHome } from "./../styles/StyledHome";
import itemimg from "./../../public/images/item.svg";
import { SmallCard } from "../components/cards/small-card/SmallCard";
import { CardData } from "./../components/cards/small-card/CardData";

export const Home = () => {
  return (
    <StyledHome>
      <div className="global-main">
        <div className="container">
          <div className="row">
            {CardData.map((props) => {
              const { img, title, author_1, author_2, classname } = props;
              return (
                <SmallCard
                  img={img}
                  title={title}
                  author_1={author_1}
                  author_2={author_2}
                  classname={classname}
                />
              );
            })}
          </div>
        </div>
      </div>
      <div className="loop-section">
        <div className="container">
          <article className="item is-hero">
            <small className="item-label global-label global-zigzag">
              Latest posts
              <img src={itemimg} alt="" />
            </small>
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
