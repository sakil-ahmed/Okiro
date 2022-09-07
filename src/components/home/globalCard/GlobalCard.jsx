import React from "react";
import { StyledGlobal } from "./StyledGlobal";
import { SmallCard } from "./../../cards/small-card/SmallCard";

export const GlobalCard = () => {
  const CardData = [
    {
      img: "images/photo-1557800636-894a64c1696f.jpeg",
      title: "Don’t be afraid",
      author_1: "Megan Anderson",
      author_2: "Lauren Langford",
      classname: "tag_hash_post_card_pool",
    },
    {
      img: "images/photo-1582020738577-2e7a48043902--VczJeV.jpeg",
      title: "You have to fight to reach your dream",
      author_1: "Megan Anderson",
      author_2: "",
      classname: "tag_hash_post_card_rose",
    },
    {
      img: "images/photo-1530653333484-d02d0faff9bf.jpeg",
      title: "I always loved aesthetics",
      author_1: "Hannah Weastell",
      author_2: "Victoria West",
      classname: "tag_hash_post_card_sand",
    },
    {
      img: "images/photo-1590374504314-295374f053e4.jpeg",
      title: "Creating deluxe drink is like playing a sport",
      author_1: "Victoria West",
      author_2: "",
      classname: "tag_hash_post_card_aqua",
    },
  ];
  return (
    <StyledGlobal>
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
    </StyledGlobal>
  );
};
