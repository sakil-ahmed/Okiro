import styled from "styled-components";
import { THEME } from "./Themes";
import { media } from "./Respinsive";

export const StyledMemberShip = styled.div`
  .row {
    /* Membership Top Content Style */
    .membership-section {
      position: relative;
      z-index: 1;
      overflow: hidden;
      box-sizing: border-box;
      max-width: 100%;
      margin: 0 20;
      padding: 10vh 5%;
      border-radius: calc(22px * 2);
      ${media.down("md")} {
        padding: 5%;
      }
      .archive-wrap {
        display: flex;
        align-items: flex-start;
        width: 100%;
        max-width: calc(1280px - 20px * 2);
        margin: 0 auto;
        .archive-container {
          align-items: center;
          flex: 0 1 auto;
          max-width: 440px;
          box-sizing: border-box;
          min-height: 126px;
          padding: 22px;
          background-color: ${THEME.colors.bodyColor};
          border-radius: calc(22px + 22px / 5);
          display: flex;
          ${media.down("md")} {
            min-height: 80px;
            padding: 16px;
            border-radius: calc(22px + 22px / 1.3);
          }
          .archive-content {
            flex: 999 0 100px;
            box-sizing: border-box;
            padding: 10px 30px;
            ${media.down("md")} {
              padding-right: 8px;
              padding-left: 8px;
            }
            .archive-title {
              font-size: 45px;
              line-height: 1.2;
              margin: 0 0 0 -2px;
              font-weight: 900;
              ${media.down("md")} {
                font-size: 30px;
              }
            }
            .archive-description {
              width: 100%;
              margin: 20px 0 0;
              font-weight: 800;
              font-size: 18px;
              ${media.down("md")} {
                font-size: 15px;
              }
              img {
                display: block;
                width: 80px;
                margin-bottom: 10px;
                opacity: 0.1;
              }
            }
          }
        }
      }
      .archive-cover {
        position: absolute;
        z-index: -1;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
    }
    /* Membership Middle Heading Style */
    .membership-heading {
      font-size: 22px;
      font-weight: 900;
      display: block;
      width: 100%;
      margin: 7vh 0 10px;
      text-align: center;
      ${media.down("sm")} {
        font-size: 16px;
      }
      ${media.down("xl")} {
        margin-top: 4vh;
      }
    }
    /* Membership Switch Btn Style */
    .membership-switch {
      display: flex;
      width: 100%;
      max-width: 300px;
      min-height: 72px;
      margin: 5vh auto;
      padding: 10px;
      background-color: ${THEME.colors.colorTwo};
      position: relative;
      border-radius: 100px;
      &::before {
        position: absolute;
        top: 10px;
        right: 10px;
        bottom: 10px;
        width: calc(50% - 10px);
        content: "";
        transition: transform 0.15s ease-in-out;
        background-color: ${THEME.colors.btnPrimary};
        border-radius: 100px;
      }
      button {
        font-size: 18px;
        font-weight: 900;
        line-height: 1;
        width: 50%;
        padding: 0;
        cursor: pointer;
        position: relative;
        user-select: none;
        transition: color 0.15s ease-in-out;
        color: ${THEME.colors.primary};
        border: 0;
        outline: 0;
        background-color: transparent;
        box-shadow: none;
      }
    }
  }
`;
