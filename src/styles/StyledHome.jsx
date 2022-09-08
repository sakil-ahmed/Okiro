import styled from "styled-components";
import { media } from "./Respinsive";
import { THEME } from "./Themes";

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

  /*  */
  .global_section {
    margin: 0 auto 12vh;
    margin-top: 50px;
    .container {
      position: relative;
      .row {
        article {
          ${media.down("md")} {
            &:nth-child(3) {
              width: 100%;
            }
          }
          ${media.down("sm")} {
            &:nth-child(4) {
              display: none;
            }
          }
          ${media.down("xsm")} {
            &:nth-child(4) {
              display: block;
            }
          }
        }
      }
      .global-label {
        font-size: 10px;
        font-weight: 900;
        line-height: 1.2;
        position: absolute;
        left: 0;
        width: 300px;
        margin-top: 0;
        transform: translate(-30%, -90px) rotate(-90deg);
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
  }
  /*  */
  .global_post_section {
    margin: 30px 0;
    .container {
      max-width: 1120px;
      margin: 0 auto;
      .row {
        display: flex;
        flex-wrap: wrap;
        article {
          position: relative;
          flex: 1 0 calc(33.333% - 20px * 2);
          box-sizing: border-box;
          max-width: calc(100% - 20px);
          margin: 20px;
          transition: transform 0.2s ease;
          border-radius: calc(22px + 22px / 3);
          overflow: hidden;
          ${media.down("md")} {
            min-width: 210px;
          }
        }
        .tag_hash_post_card_pool {
          background-color: ${THEME.colors.colorPool};
        }
        .tag_hash_post_card_rose {
          background-color: ${THEME.colors.colorRose};
        }
        .tag_hash_post_card_sand {
          background-color: ${THEME.colors.colorSand};
        }
        .tag_hash_post_card_aqua {
          background-color: ${THEME.colors.colorAqua};
        }
        .tag_hash_post_card_peach {
          background-color: ${THEME.colors.colorPeach};
        }
        .tag_hash_post_card_cream {
          background-color: ${THEME.colors.colorCream};
        }
      }
    }
  }
`;
