import styled from "styled-components";
import { THEME } from "./../../styles/Themes";

export const StyledHeader = styled.div`
  margin: 40px 0 calc(45px + 3vh);
  padding: 0 80px;
  .row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .header_left {
      .nav {
        ul > li {
          list-style: none;
          margin: 0;
          padding: 0;
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
        img {
          width: 100%;
          object-fit: cover;
          height: 100%;
        }
      }
    }
    .header_cta {
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
  }
`;
