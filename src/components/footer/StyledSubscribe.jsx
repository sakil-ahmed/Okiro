import styled from "styled-components";
import { THEME } from "./../../styles/Themes";
import { media } from "./../../styles/Respinsive";

export const StyledSubscribe = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-right: 20px;
  margin-left: 20px;
  ${media.down("lg")} {
    flex-direction: column;
    align-items: center;
  }
  .subscribe {
    font-size: 46px;
    line-height: 1.1;
    flex: 1 1 25%;
    box-sizing: border-box;
    min-width: 240px;
    max-width: 700px;
    margin: 0;
    padding: 25px 5% 25px 0;
    font-weight: 900;
    ${media.down("lg")} {
      font-size: 42px;
      max-width: 550px;
      padding-right: 0;
      text-align: center;
    }
    ${media.down("sm")} {
      font-size: 34px;
    }
  }
  .subscribe-form {
    position: relative;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    margin-left: auto;
    padding: 10px;
    border-radius: 100px;
    background-color: ${THEME.colors.colorTwo};
    ${media.down("lg")} {
      margin-left: 0;
      max-width: 100%;
      padding: 6px;
    }

    input {
      font-size: 20px;
      display: block;
      flex: 1 1 auto;
      /* width: 180px; */
      margin-right: 12px;
      padding-right: 20px;
      padding-left: 30px;
      transition: width 0.3s ease 0.2s;
      word-break: normal;
      border-radius: 100px;
      border: none;
      outline: none;
      color: ${THEME.colors.primary};
      background-color: ${THEME.colors.colorTwo};
      transition: all 0.3s ease-in-out;
      &:focus {
        margin-right: 30px;
        ${media.down("md")} {
          margin-right: 0;
        }
      }
      ${media.down("md")} {
        font-size: 16px;
        padding-right: 10px;
        padding-left: 10px;
        width: 20%;
      }
    }
    .subscribe_btn {
      padding: 22px 26px;

      ${media.down("sm")} {
        font-size: 16px;
        padding: 18px 20px;
      }
    }
  }
`;
