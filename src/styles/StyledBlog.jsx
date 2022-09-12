import styled from "styled-components";
import { media } from "./Respinsive";
import { THEME } from "./Themes";

export const StyledBlog = styled.div`
  .post-content {
    font-weight: 400;
    max-width: 1280px;
    padding: 0 20px;
    margin: 0 auto 8vh;
    padding-top: 20px;
    ${media.up("lg")} {
      max-width: 700px;
    }
    p {
      line-height: 1.65;
      position: relative;
      font-size: 16px;
      ${media.up("sm")} {
        font-size: 18px;
      }
      ${media.up("lg")} {
        font-size: 20px;
      }
    }
    .kg-card {
      margin-right: 0;
      margin-left: 0;
      width: 100%;
      margin-top: 50px;
      margin-bottom: 50px;

      .kg-gallery-container {
        position: relative;
        display: flex;
        flex-direction: column;
        height: auto;
        ${media.up("xl")} {
          width: calc(100% + 210px - 20px + 210px - 20px);
          margin-left: calc(-210px + 20px);
        }
        /* margin: 15px auto; */
        .kg-gallery-row {
          display: flex;
          flex-direction: row;
          justify-content: center;
          .kg-gallery-image {
            overflow: hidden;
            &:first-of-type {
              flex: 0.666667 1 0%;
              border-top-left-radius: 22px;
              border-bottom-left-radius: 22px;
            }
            &:last-of-type {
              margin: 0 0 0 5px;
              flex: 0.8 1 0%;
              border-top-right-radius: 22px;
              border-bottom-right-radius: 22px;
              ${media.up("lg")} {
                margin: 0 0 0 15px;
              }
              ${media.up("xsm")} {
                margin: 0 0 0 10px;
              }
            }
            img {
              display: block;
              width: 100%;
              margin: 0;
              border-radius: 0;
              position: relative;
              max-width: 100%;
              height: auto;
            }
          }
        }
      }
    }
    blockquote {
      font-size: 30px;
      font-weight: 900;
      position: relative;
      box-sizing: border-box;
      width: 100%;
      padding-left: 60px;
      margin-top: 65px;
      margin-bottom: 65px;
      &::before {
        font-size: 110px;
        position: absolute;
        top: -28px;
        left: -8px;
        content: '"';
        color: ${THEME.colors.btnPrimary};
        ${media.down("md")} {
          font-size: 80px;
          top: -20px;
          left: -10px;
        }
        ${media.down("sm")} {
          font-size: 60px;
          left: -4px;
          top: -15px;
        }
      }
      ${media.down("md")} {
        font-size: 20px;
        padding-left: 32px;
        margin-bottom: 40px;
        margin-top: 40px;
      }
      ${media.down("xsm")} {
        font-size: 18px;
        padding-left: 32px;
      }
    }
  }
`;
