import styled from "styled-components";
import { THEME } from "./../../../styles/Themes";
import { media } from "./../../../styles/Respinsive";

export const CardStyled = styled.article`
  min-height: 221px;
  ${media.down("md")} {
    width: 33%;
    margin-bottom: 30px;
    &:nth-child(4) {
      width: 50%;
    }
  }
  ${media.down("xsm")} {
    &:nth-child(4) {
      width: 100%;
    }
  }
  ${media.down("sm")} {
    width: 50%;
    &:last-child {
      max-width: 100%;
    }
  }
  ${media.down("xsm")} {
    width: 100%;
  }
  &:last-child {
    ${media.down("xl")} {
      display: none;
    }

    ${media.down("md")} {
      display: inline-block;
      width: 50%;
    }
    ${media.down("sm")} {
      width: 100%;
    }
  }
  .item-section {
    cursor: pointer;
    position: relative;
    flex: 1 0 calc(173px - 20px * 2);
    box-sizing: border-box;
    max-width: 230px;
    margin: 0 20px;
    padding: 18px;
    transition: transform 0.2s ease;
    border-radius: calc(22px + 22px / 5);
    ${media.down("md")} {
      max-width: 100%;
    }

    .global-image {
      height: 165px;
      margin-bottom: 14px;
      border-radius: calc(22px / 1.8);
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    .card-title {
      padding: 0 10px;
      h3 {
        font-size: 19px;
        margin-top: 0;
        margin-bottom: 1vh;
        font-weight: 900;
      }
      .global-sections-meta {
        font-size: 13px;
        line-height: 1.4;
        font-weight: 900;
        display: flex;
        flex-direction: column;
        a {
          &:hover {
            text-decoration: underline;
          }
        }
        ${media.down("lg")} {
          display: none;
        }
      }
    }
  }
  .tag_hash_post_card_pool {
    background-color: ${THEME.colors.colorPool};
  }
  .tag_hash_post_card_rose {
    background-color: ${THEME.colors.colorRose};
  }
  .tag_hash_post_card_sand {
    background-color: ${THEME.colors.colorSand};
  }
  .tag_hash_post_card_aqua {
    background-color: ${THEME.colors.colorAqua};
  }
  .tag_hash_post_card_peach {
    background-color: ${THEME.colors.colorPeach};
  }
`;
