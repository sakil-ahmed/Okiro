import styled from "styled-components";
import { THEME } from "./../../../styles/Themes";
import { media } from "./../../../styles/Respinsive";

export const StyledSearch = styled.div`
  .close_icon {
    position: absolute;
    top: 50px;
    right: 50px;
    cursor: pointer;
  }
  .search_content {
    position: relative;
    z-index: 999;
    top: 20vh;
    overflow: hidden;
    width: calc(100% - 50px);
    max-width: 900px;
    margin: 0 auto;
    border-radius: calc(22px / 1.5);
    background-color: ${THEME.colors.bodyColor};
    color: ${THEME.colors.primary};
    .keywords {
      width: 100%;
      border: none;
      outline: none;
      padding: 15px;
      font-size: 20px;
      font-weight: 900;
      ${media.up("lg")} {
        padding: 32px 20px;
        font-size: 34px;
      }
    }
    .search-meta {
      background-color: ${THEME.colors.btnPrimary};
      text-align: start;
      padding: 12px 0 12px 20px;
      letter-spacing: 3px;
      text-transform: uppercase;
      font-size: 9px;
      font-weight: 800;
      color: ${THEME.colors.bodyColor};
    }
  }
`;
