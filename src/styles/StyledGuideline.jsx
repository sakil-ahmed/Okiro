import styled from "styled-components";
import { media } from "./Respinsive";

export const StyledGuides = styled.div`
  .item-title {
    font-size: 62px;
    font-weight: 900;
    text-align: center;
    margin: 0 0 30px -2px;
    ${media.down("md")} {
      font-size: 48px;
      margin: 5px 0 25px;
      text-align: start;
    }
  }
  .post-content {
    .post-descptrion {
      font-size: 24px;
      font-weight: 900;
      margin-bottom: 20px;
      ${media.down("md")} {
        font-size: 19px;
      }
    }
    p {
      line-height: 1.65;
      position: relative;
      font-size: 20px;
    }
    img {
      margin-top: 70px;
      margin-bottom: 80px;
      height: 16px;
      opacity: 0.1;
    }
    .using-the-editor {
      font-size: 41px;
      line-height: 1.4;
      margin-bottom: 20px;
      font-weight: 900;
      ${media.down("md")} {
        font-size: 30px;
      }
    }
  }
`;
