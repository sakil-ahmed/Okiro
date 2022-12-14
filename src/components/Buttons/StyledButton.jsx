import styled from "styled-components";
import { THEME } from "./../../styles/Themes";
import { media } from "./../../styles/Respinsive";

export const StyledBtn = styled.div`
  .btn {
    padding: 12px 22px;
    line-height: 1.5;
    position: relative;
    font-size: 19px;
    display: inline-block;
    pointer-events: auto;
    border-radius: 100px;
    text-align: center;
    color: ${THEME.colors.bodyColor};
    font-weight: 900;
    font-size: 19px;
    background-color: ${THEME.colors.btnPrimary};
    &:hover {
      background: #535ffd;
    }
  }
  .mobile_btn {
    padding: 8px 10px;
    font-size: 16px;
  }
  .pricing-Btn {
    padding: 22px 26px;
    ${media.down("xsm")} {
      font-size: 16px;
      padding: 18px 20px;
    }
  }
`;
