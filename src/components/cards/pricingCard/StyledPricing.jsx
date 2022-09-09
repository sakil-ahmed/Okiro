import styled from "styled-components";
import { THEME } from "./../../../styles/Themes";
import { media } from "./../../../styles/Respinsive";

export const StyledPricingCard = styled.div`
  overflow: hidden;
  flex: 1 0 calc(33.333% - 20px * 2);
  box-sizing: border-box;
  min-width: 260px;
  max-width: 375px;
  margin: 20px;
  padding-bottom: 5vh;
  text-align: center;
  color: ${THEME.colors.primary};
  border-radius: 22px;
  background-color: #f4f4f7;
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 939px) {
    &:last-child {
      max-width: 100%;
    }
  }
  @media (max-width: 639px) {
    max-width: 100%;
  }

  .membership-card-content {
    width: 100%;
    margin: 0 auto;
    .membership-card-title {
      font-size: 10px;
      line-height: 1;
      margin: 0;
      padding: 14px 0;
      text-indent: 4px;
      letter-spacing: 4px;
      text-transform: uppercase;
      color: ${THEME.colors.bodyColor};
      background-color: ${THEME.colors.btnPrimary};
      font-weight: 900;
    }
    .membership-card-price {
      font-size: 82px;
      max-width: 240px;
      margin: 3vh auto;
      text-indent: -28px;
      font-weight: 900;
      ${media.down("lg")} {
        font-size: 65px;
      }
      sup {
        font-size: 50%;
        position: relative;
        margin-right: 3px;
      }
      span {
        font-size: 20px;
      }
    }
    .membership-card-description {
      font-size: 20px;
      margin: -1vh 25px 3vh;
      font-weight: 900;
      ${media.down("xsm")} {
        font-size: 16px;
      }
    }
    .membership-card-options {
      ul {
        margin: 0;
        padding: 0 20px 5vh;
        li {
          font-size: 18px;
          line-height: 1.3;
          margin: 0 0 10px;
          padding: 0;
          list-style: none;
          ${media.down("xsm")} {
            font-size: 14px;
          }
        }
      }
    }
  }
  .pricing-button {
    align-self: flex-end;
    margin: 0 auto;
  }
`;
