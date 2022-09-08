import styled from "styled-components";
import { THEME } from "./../../../styles/Themes";
import { media } from "./../../../styles/Respinsive";

export const StyledCard = styled.div`
  height: 100%;

  .post {
    width: 100%;

    .global-image {
      img {
        width: 100%;
        height: 330px;
        object-fit: cover;
        ${media.down("md")} {
          height: 200px;
        }
      }
    }
    .card-title {
      padding: 0 28px 35px;

      ${media.up("sm")} {
        height: 150px;
      }

      .title-text {
        font-size: 26px;
        line-height: 1.2;
        width: 100%;
        max-width: 360px;
        margin: 30px 0 12px -1px;
        margin-top: 20px;
        font-weight: 900;
        color: ${THEME.colors.primary};
      }
      .global-sections-meta {
        font-size: 16px;
        line-height: 1.2;
        font-weight: 800;
        a {
          &:hover {
            text-decoration: underline;
          }
        }
      }
    }

    .card_btn {
      margin: 0 0 22px 28px;
    }
  }
`;
