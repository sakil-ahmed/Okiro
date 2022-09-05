import React from "react";
import { Link } from "react-router-dom";
import logo from "./../../../public/images/okiro.svg";
import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { AiFillYoutube } from "react-icons/ai";
import { FaMeetup } from "react-icons/fa";
import { StyledFooter } from "./StyledFooter";

export const Footer = () => {
  return (
    <StyledFooter>
      <footer className="footer_section global_footer">
        <div className="container">
          <div className="footer_wrap">
            <div className="footer_data">
              <div className="footer_logo">
                <Link to="/" className="is_image">
                  <img src={logo} alt="Okaria Logo" />
                </Link>
              </div>
              <p className="footer_description">
                A minimal, functional theme for running a paid-membership
                publication on Ghost.
              </p>
              <div className="footer_icons">
                <Link to="" className="icon link Facebook">
                  <BsFacebook />
                </Link>
                <Link to="" className="icon link Twitter">
                  <BsTwitter />
                </Link>
                <Link to="" className="icon link Meetup">
                  <FaMeetup />
                </Link>
                <Link to="" className="icon link Youtube">
                  <AiFillYoutube />
                </Link>
              </div>
            </div>
            <div className="footer_nav">
              <div className="footer_nav_column">
                <small>ABOUT</small>
                <ul>
                  <li>
                    <Link to="">Features</Link>
                  </li>
                  <li>
                    <Link to="">Style Guide</Link>
                  </li>
                  <li>
                    <Link to="">Contact</Link>
                  </li>
                  <li>
                    <Link to="">Get Theme</Link>
                  </li>
                </ul>
              </div>
              <div className="footer_nav_column">
                <small>FEATURES</small>
                <ul>
                  <li>
                    <Link to="">Account</Link>
                  </li>
                  <li>
                    <Link to="">Membership</Link>
                  </li>
                  <li>
                    <Link to="">Sign in</Link>
                  </li>
                  <li>
                    <Link to="">Sign up</Link>
                  </li>
                </ul>
              </div>
              <div className="footer_nav_column">
                <small>SUPPORT</small>
                <ul>
                  <li>
                    <Link to="">Authors</Link>
                  </li>
                  <li>
                    <Link to="">Tags</Link>
                  </li>
                  <li>
                    <Link to="">Dark version</Link>
                  </li>
                  <li>
                    <Link to="">404</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer_copyright">
            <Link to="">Okiro</Link>© 2022. All Right Reserved. Published with{" "}
            <Link to="">Ghost</Link>&<Link to="">Okiro</Link>.
          </div>
        </div>
      </footer>
    </StyledFooter>
  );
};
