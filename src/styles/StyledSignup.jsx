import styled from "styled-components";
import bgimg from "../../public/images/signup.jpg";
import { media } from "./Respinsive";

export const StyledSignup = styled.div`
  ${media.down("lg")} {
    padding-right: 6%;
    padding-left: 6%;
  }
  width: 100%;
  height: 100%;
  .custom-wrap {
    display: flex;
    width: 100%;
    height: 100%;
    .custom-image {
      width: 38%;

      background-image: url(${bgimg});
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
      ${media.down("lg")} {
        display: none;
      }
    }
    .custom-container {
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      text-align: center;
      .custom-logo {
        width: 100%;
        max-width: 470px;
        margin: 6vh auto;
        a {
          width: 100%;
          text-align: center;
          img {
            max-height: 45px;
          }
        }
      }
    }
  }
`;
