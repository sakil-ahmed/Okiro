import styled from "styled-components";
import { THEME } from "./../../styles/Themes";

export const StyledItem = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  .item-container {
    display: flex;
    /* max-width: 60%; */
    width: 100%;
    align-items: center;
    flex-direction: row;
    margin: 0 20px;
    flex: 0 0 50%;
    .item-image {
      position: relative;
      min-height: 600px;
      height: 100%;
      margin-right: 5%;
      img {
        border-radius: calc(22px * 2);
        height: 100%;
        width: 100%;
        object-fit: cover;
        min-height: 600px;
      }
    }
  }
  .item-content {
    .item-tags {
      margin-bottom: 22px;
    }
    .item-title {
      font-size: 54px;
      max-width: 100%;
      margin: 0 0 30px -2px;
      color: ${THEME.colors.primary};
      line-height: 1.2;
      font-weight: 900;
      max-width: 452px;
      width: 100%;
    }
    .item-excerpt {
      max-width: 480px;
      margin-top: 50px;
      img {
        width: 90px;
        transform: translateX(-3px);
        opacity: 0.1;
        margin-bottom: 10px;
      }
      span {
        font-size: 18px;
        font-weight: 800;
      }
    }
    .item-meta {
      display: flex;
      flex-wrap: wrap;
      margin-top: 40px;
      align-items: center;
      .item-profile-image {
        display: flex;
        .global-image {
          overflow: hidden;
          width: 44px;
          height: 44px;
          margin-right: -15px;
          border-radius: 100px;
          border: 2px solid #fff;
          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          &:last-of-type {
            margin-right: 9px;
            z-index: -5;
          }
        }
      }
      .item-authors {
        a {
          font-size: 16px;
          line-height: 1.2;
          font-weight: 800;
        }
        .item-time {
          font-size: 15px;
          font-weight: 400;
          line-height: 1.6;
          display: block;
        }
      }
    }
  }
`;
