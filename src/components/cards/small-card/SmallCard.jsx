import React from "react";
import { Link } from "react-router-dom";
import { CardStyled } from "./CardStyled";

export const SmallCard = (props) => {
  const { img, title, author_1, author_2, classname } = props;
  return (
    <CardStyled>
      <Link to="/blog"> </Link>
      <div className={`item-section post tag-story ${classname}`}>
        <Link to="/blog">
          <div className="global-image">
            <img src={img} alt="" />
          </div>
        </Link>
        <div className="card-title">
          <Link to="/blog">
            <h3 className="title-text">{title}</h3>
          </Link>
          <div className="global-sections-meta">
            {author_1 ? <Link to="/blog">{author_1},</Link> : ""}
            {author_2 ? <Link to="/blog">{author_2}</Link> : ""}
          </div>
        </div>
      </div>
    </CardStyled>
  );
};
