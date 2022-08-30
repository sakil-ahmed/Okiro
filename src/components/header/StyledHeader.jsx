import styled from "styled-components";

export const StyledHeader = styled.div`
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
          .dropdown {
            position: relative;
            .sub_menu {
              visibility: hidden;
              position: absolute;
              top: 20px;
              left: 0;
              opacity: 0;
              transition: all 0.3s ease-in-out;
              height: 0;
            }
            &:hover {
              .sub_menu {
                visibility: visible;
                opacity: 1;
                height: auto;
              }
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
      }
    }
  }
`;
