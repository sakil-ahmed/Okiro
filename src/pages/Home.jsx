import React from "react";
import { Subscribe } from "../components/footer/Subscribe";
import { Item } from "../components/home/Item";
import { StyledHome } from "./../styles/StyledHome";
import itemimg from "./../../public/images/item.svg";
import { SmallCard } from "../components/cards/small-card/SmallCard";
import { CardData } from "./../components/cards/small-card/CardData";
import { GlobalCard } from "../components/home/globalCard/GlobalCard";
import { cardData } from "./../components/cards/big-card/Carddata";
import { BigCard } from "../components/cards/big-card/BigCard";
import { Header } from "./../components/header/Header";
import { Footer } from "./../components/footer/Footer";
import mainimg from "./../../public/images/photo-1560141343-966cb5212777.jpeg";

export const Home = () => {
  return (
    <StyledHome>
      <Header />
      <div className="global-main">
        <div className="container">
          <h2 className="global-label global-zigzag">
            Featured
            <img src={itemimg} alt="" />
          </h2>
          <div className="row">
            {CardData.map((props, i) => {
              const { img, title, author_1, author_2, classname } = props;
              return (
                <SmallCard
                  key={i}
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
            <Item
              img={mainimg}
              title="I work best when my space is filled with inspiration"
            />
          </article>
        </div>
      </div>
      {/* post */}
      <div className="global_post_section">
        <div className="container">
          <div className="row">
            {cardData.map((props, i) => {
              const {
                img,
                title,
                author_1,
                author_2,
                classname,
                btntext,
                btnclassname,
              } = props;
              return (
                <article key={i} className={classname}>
                  <BigCard
                    img={img}
                    title={title}
                    author_1={author_1}
                    author_2={author_2}
                    classname={classname}
                    btntext={btntext}
                    btnclassname={btnclassname}
                  />
                </article>
              );
            })}
          </div>
        </div>
      </div>
      {/* post */}

      {/* Global Section */}
      <div className="global_section">
        <div className="container">
          <h2 className="global-label global-zigzag">
            Story
            <img src={itemimg} alt="" />
          </h2>
          <div className="row">
            <GlobalCard />
          </div>
        </div>
      </div>
      {/* Global Section */}

      {/* SubsCribe */}
      <div className="container">
        <Subscribe />
      </div>
      <Footer />
    </StyledHome>
  );
};
