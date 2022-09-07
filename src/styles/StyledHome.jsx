import styled from "styled-components";
import { media } from "./Respinsive";

export const StyledHome = styled.div`
  /* hero Section */
  .global-main {
    .container {
      position: relative;
      .global-label {
        font-size: 10px;
        font-weight: 900;
        line-height: 1.2;
        position: absolute;
        left: 0;
        width: 300px;
        margin-top: 0;
        transform: translate(-48%, -60px) rotate(-90deg);
        letter-spacing: 8px;
        text-transform: uppercase;
        ${media.down("lg")} {
          margin-right: auto;
          margin-left: auto;
        }

        img {
          width: 90px;
          margin-top: 10px;
          margin-bottom: 5px;
          margin-right: auto;
          margin-left: auto;
          opacity: 0.1;
          ${media.up("lg")} {
            display: none;
          }
          ${media.down("xsm")} {
            display: none;
          }
        }
        ${media.down("lg")} {
          transform: translate(0) rotate(0);
          position: relative;
          display: block;
          text-align: center;
          margin-bottom: 20px;
        }
      }
    }
    margin: 0 auto 14vh;
    ${media.down("md")} {
      margin: 0;
    }
    .row {
      position: relative;
      display: flex;
      align-items: flex-start;
      width: 100%;
      flex-grow: 1;
      ${media.down("lg")} {
        flex-wrap: wrap;
      }
    }
  }
  /* hero Section */

  /* Loop section */
  .loop-section {
    .container {
      position: relative;
    }
    .item-label {
      font-size: 10px;
      font-weight: 900;
      line-height: 1.2;
      position: absolute;
      left: 0;
      width: 300px;
      margin-top: 0;
      transform: translate(-48%, 120px) rotate(-90deg);
      letter-spacing: 8px;
      text-transform: uppercase;
      ${media.down("md")} {
        margin-right: auto;
        margin-left: auto;
      }

      img {
        width: 90px;
        margin-top: 10px;
        margin-bottom: 5px;
        margin-right: auto;
        margin-left: auto;
        opacity: 0.1;
        ${media.up("md")} {
          display: none;
        }
      }
      ${media.down("md")} {
        transform: translate(0) rotate(0);
        position: relative;
        display: block;
        text-align: center;
        margin-bottom: 20px;
      }
    }
  }
`;
