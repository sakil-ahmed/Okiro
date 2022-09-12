import React from "react";
import { Header } from "./../components/header/Header";
import { Footer } from "./../components/footer/Footer";
import { StyledGuides } from "./../styles/StyledGuideline";
import img from "../../public/images/item.svg";

export const StyleGuide = () => {
  return (
    <StyledGuides>
      <Header />
      <div className="container">
        <h1 className="item-title">Style Guide</h1>
      </div>

      <div className="post-content padding">
        <h4 className="post-descptrion">
          Ghost has a powerful visual editor with familiar formatting options,
          as well as the ability to seamlessly add dynamic content.
        </h4>
        <p>
          Under the hood the editor delivers power and flexibility, with the
          ability to quickly add content such as <strong>images</strong> ,
          <strong>galleries</strong> , <strong>videos</strong> ,
          <strong>embeds</strong> <strong>code</strong>
          <strong>!</strong>
        </p>
        <img src={img} alt="" />
        <h2 className="using-the-editor">Using the editor</h2>
        <p>
          <strong>Rich editing at your fingertips. </strong>
          Using the
          <strong> contextual toolbar </strong>
          allows you to efficiently format your text, add links and insert rich
          media.
        </p>
      </div>
      <Footer />
    </StyledGuides>
  );
};
