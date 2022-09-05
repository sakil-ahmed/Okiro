import styled from "styled-components";
import { THEME } from "./../../../styles/Themes";

export const StyledMmenu = styled.div`
  width: 100%;
  padding-top: 15px;

  ul > li {
    margin: 0;
    padding: 0;
    list-style: none;
    position: relative;
    a {
      line-height: 1.3;
      margin-right: 8px;
      padding: 5px 10px 5px 0;
      font-size: 16px;
      font-weight: 900;
      color: ${THEME.colors.primary};
      display: inline-block;
    }
  }
  .dot {
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
  .search_open {
    background-color: ${THEME.colors.btnPrimary};
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
    height: 50px;
    padding: 17px 18px 0 0;
    cursor: pointer;
    margin-top: 15px;

    color: ${THEME.colors.bodyColor};
    span {
      font-size: 15px;
      font-weight: 900;
      margin-right: 8px;
    }
    svg {
      display: inline-block;
    }
  }
`;
