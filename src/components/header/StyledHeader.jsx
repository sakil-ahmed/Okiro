import styled from "styled-components";
import { THEME } from "./../../styles/Themes";
import { media } from "./../../styles/Respinsive";

export const StyledHeader = styled.div`
  margin: 40px 0 calc(45px + 3vh);
  ${media.down("md")} {
    margin: 20px 0;
    position: relative;
  }
  .row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .header_left {
      ${media.down("lg")} {
        display: none;
      }

      .nav {
        ul > li {
          list-style: none;
          margin: 0;
          padding: 0;
        }
        .dot {
          position: relative;
          &::after {
            content: "";
            position: absolute;
            top: 0;
            right: 10px;
            width: 0;
            height: 0;
            border-radius: 100%;
            background-color: #2b394e73;
          }
          &:hover::after {
            width: 7px;
            height: 7px;
          }
        }
        .menu {
          display: flex;
          align-items: center;
          justify-content: center;
          padding-left: 0;
          .menu_item {
            font-size: 19px;
            display: inline-block;
            a {
              line-height: 1.5;
              position: relative;
              margin: 0 30px 0 0;
              padding: 0;
              font-size: 19px;
              font-weight: 900;
              color: ${THEME.colors.primary};
            }
          }
          .dropdown {
            position: relative;
            margin-bottom: -10px;
            svg {
              cursor: pointer;
            }

            .sub_menu {
              margin-left: 0;
              padding-left: 0;
              position: absolute;
              left: 0;
              top: 40px;
              padding: 20px 20px 15px 26px;
              min-width: 120px;
              background-color: ${THEME.colors.colorTwo};
              border-radius: calc(22px / 2);
              z-index: 99;
              visibility: hidden;
              opacity: 0;
              transform: translateX(-27px);
              .sub_menu_item {
                position: relative;
                margin-bottom: 8px;
              }
            }
            .dropdown_handle {
              visibility: visible;
              opacity: 1;
            }
          }
        }
      }
    }
    .header_middle {
      .logo {
        width: 115px;
        ${media.down("md")} {
          width: 87px;
        }
        img {
          width: 100%;
          object-fit: cover;
          height: 100%;
        }
      }
    }

    .mobile_menu_bar {
      // toggler button
      ${media.up("lg")} {
        display: none;
      }
      position: relative;
      .toggle-btn {
        width: 25px;
        height: 28px;
        color: ${THEME.colors.primary};
        display: flex;
        align-items: end;
        flex-direction: column;
        cursor: pointer;
        transition: all 0.3s linear;

        span {
          width: 25px;
          height: 4px;
          border-radius: 100px;
          margin-top: 3px;
          margin-bottom: 3px;
          background-color: ${THEME.colors.primary};
          transition: all 0.3s linear;
        }
      }
      .close-toggle {
        transition: all 0.3s linear;
        span {
          &:nth-child(1) {
            transform: translateY(8px) rotate(-45deg);
            transition: all 0.3s linear;
          }
          &:nth-child(2) {
            opacity: 0;
          }
          &:nth-child(3) {
            transform: translateY(-11px) rotate(45deg);
            transition: all 0.3s linear;
          }
        }
      }
      .mobile_menu_item {
        position: absolute;
        top: 50px;
        right: 0;
        width: 200px;
        background-color: ${THEME.colors.colorTwo};
        text-align: right;
        border-radius: calc(22px / 2);
        overflow: hidden;
        z-index: 99;
        visibility: hidden;
        opacity: 0;
      }
      .menu_open {
        visibility: visible;
        opacity: 1;
      }
    }
    .header_cta {
      ${media.down("lg")} {
        display: none;
      }
      .header_cta_wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        .search_icon {
          cursor: pointer;
        }
        .sign_in {
          margin: 0 30px;
          line-height: 1.5;
          position: relative;
          padding: 0;
          font-size: 19px;
          display: inline-block;
          font-weight: 900;
          a {
            color: ${THEME.colors.primary};
          }
        }
      }
    }
    .popup_search_overlay {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
      z-index: 999;
      text-align: center;
      background-color: rgba(0, 0, 0, 0.6);
      color: ${THEME.colors.bodyColor};
    }
  }
`;
