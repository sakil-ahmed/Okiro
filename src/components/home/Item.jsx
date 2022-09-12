import React from "react";
import { Link } from "react-router-dom";
import { StyledItem } from "./StyledItem";
// import mainimg from "./../../../public/images/photo-1560141343-966cb5212777.jpeg";
import itemimg from "./../../../public/images/item.svg";
import { Tagbtn } from "../Buttons/Tagbtn";
import profileimg1 from "../../../public/images/prince-akachi-J1OScm_uHUQ-unsplash.jpg";
import profileimg2 from "../../../public/images/laura-chouette-1z--Cu8-wXU-unsplash.jpg";

export const Item = (props) => {
  const { img, title } = props;
  return (
    <StyledItem>
      <div className="item-container">
        <Link to="/blog" className="item-image global-image">
          <img
            src={img}
            alt="I work best when my space is filled with inspiration"
          />
        </Link>
      </div>
      <div className="item-content">
        <div className="item-tags global-tags">
          <Tagbtn btntext="Creative" />
        </div>
        <div className="item-title">
          <Link to="/blog">{title}</Link>
        </div>
        <p className="item-excerpt global-zigzag">
          <img src={itemimg} alt="" />
          <span className="text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Erat ut
            facilisis rutrum donec tristique mauris est ac nunc. Eget nec, lorem
            mi libero accumsan....
          </span>
        </p>
        <div className="item-meta global-meta">
          <div className="item-profile-image">
            <Link to="" className="global-image">
              <img src={profileimg1} alt="" />
            </Link>
            <Link to="" className="global-image">
              <img src={profileimg2} alt="" />
            </Link>
          </div>
          <div className="item-authors">
            <Link to="">Victoria West</Link>,<Link to="">Lauren Langford</Link>
            <div className="item-time">
              <time dateTime="2020-09-30">September 30, 2020</time>∙ 3 minutes
              read
            </div>
          </div>
        </div>
      </div>
    </StyledItem>
  );
};
