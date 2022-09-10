import styled from "styled-components";
import { THEME } from "./../../styles/Themes";
import { media } from "./../../styles/Respinsive";

export const StyledForm = styled.div`
  align-items: center;
  flex: 1 0 auto;
  width: 100%;
  max-width: 470px;
  margin: 0 auto 10vh;
  text-align: center;
  form {
    position: relative;
    width: 100%;
    margin-bottom: 5vh;
    h1 {
      font-size: 42px;
      line-height: 1.2;
      margin: 0 5% 4vh;
      padding: 0;
      font-weight: 900;
      ${media.down("xsm")} {
        font-size: 30px;
      }
    }
    label {
      font-size: 13px;
      display: block;
      text-align: center;
    }
    input {
      font-size: 20px;
      padding-top: 22px;
      padding-bottom: 22px;
      transition: background-color 0.15s ease;
      text-align: center;
      word-break: break-all;
      border-radius: 100px;
      background-color: ${THEME.colors.colorTwo};
      border: 0;
      outline: 0;
      display: block;
      width: 100%;
      margin: 10px 0 3vh;
      padding-right: 22px;
      padding-left: 22px;
      font-weight: 400;
    }
    .button-clone {
      font-size: 20px;
      font-weight: 900;
      line-height: 1.5;
      position: relative;
      z-index: 0;
      display: inline-block;
      padding: 22px 26px;
      cursor: pointer;
      text-align: center;
      color: #fff;
      border: 0;
      outline: 0;
      display: block;
      background-color: transparent;
      border-radius: 100px;
      background-color: ${THEME.colors.btnPrimary};
      margin: 0 auto;
      margin-top: 4vh;
    }
    .global-question {
      font-size: 13px;
      display: block;
      margin-top: 4vh;
      text-align: center;
      a {
        font-weight: 800;
      }
    }
  }
`;
