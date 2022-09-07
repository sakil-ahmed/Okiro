import styled from "styled-components";
import { THEME } from "./../../styles/Themes";
import { media } from "./../../styles/Respinsive";

export const StyledFooter = styled.div`
  .footer_section {
    .footer_wrap {
      display: flex;
      position: relative;
      display: flex;
      margin: 0 20px;
      padding: 60px 0 0;
      ${media.down("md")} {
        flex-wrap: wrap;
        justify-content: center;
      }
      .footer_data {
        flex: 999 0 30%;
        padding-right: 5%;
        ${media.down("md")} {
          flex-basis: 100%;
          padding-right: 0;
          text-align: center;
        }
        .footer_logo {
          max-width: 350px;
          width: 100%;
          margin-bottom: 2vh;
          ${media.down("md")} {
            margin-left: auto;
            margin-right: auto;
          }
          .is_image {
            img {
              max-width: 150px;
              max-height: 35px;
              ${media.down("md")} {
                margin-left: auto;
                margin-right: auto;
              }
            }
          }
        }
        .footer_description {
          font-size: 16px;
          line-height: 1.4;
          max-width: 300px;
          margin: 0 0 4vh;
          ${media.down("md")} {
            margin-left: auto;
            margin-right: auto;
          }
        }
        .footer_icons {
          .link {
            line-height: 1;
            display: inline-block;
            width: 40px;
            height: 40px;
            margin: 0 7px 7px 0;
            padding: 0;
            svg {
              width: 24px;
              height: 24px;
              transition: fill 0.15s ease;
              fill: ${THEME.colors.primary};
            }
            &:hover {
              svg {
                fill: ${THEME.colors.btnPrimary};
              }
            }
          }
        }
      }
      .footer_nav {
        display: flex;
        flex: 1 0 auto;
        max-width: 100%;
        ${media.down("md")} {
          flex-wrap: wrap;
          justify-content: center;
          text-align: center;
        }
        .footer_nav_column {
          width: 180px;
          margin-bottom: 30px;
          ${media.down("md")} {
            flex: 1 0 120px;
            width: 100%;
            max-width: 170px;
            margin-bottom: 30px;
          }
          small {
            font-size: 10px;
            line-height: 1;
            display: block;
            margin: 10px 0 30px;
            padding: 0 20px 0 15%;
            letter-spacing: 4px;
            text-transform: uppercase;
            ${media.down("md")} {
              margin-bottom: 20px;
              text-indent: 4px;
              padding-right: 0;
            }
          }
          ul {
            margin: 0;
            padding-left: 15%;
            li {
              font-size: 16px;
              margin-bottom: 18px;
              a {
                color: ${THEME.colors.primary};
                font-weight: bold;
                font-size: 16px;
                &:hover {
                  text-decoration: underline;
                }
              }
            }
          }
        }
      }
    }
    .footer_copyright {
      font-size: 12px;
      margin: 3vh 22px;
      margin-left: 0;
      ${media.down("md")} {
        text-align: center;
        max-width: 340px;
        width: 100%;
        margin-left: auto;
        margin-right: auto;
      }
    }
  }
`;
