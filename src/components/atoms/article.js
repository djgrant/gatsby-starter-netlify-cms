import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { layout, space } from 'styled-system';
import { raw } from '../../utils/styled';

const mq1 = '@media (min-width: 40em)';

const defaultStyles = css`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'Playfair Display', serif;
    margin: 0;
    line-height: 1.1;
    letter-spacing: -1px;
  }
`;

export default styled.article(
  defaultStyles,
  layout,
  space,
  raw(
    (props, get) => `
    h1 + .html-content,
    h2 + .html-content {
      margin-top: 20px;
      ${mq1} {
        margin-top: 24px;
      }
    }

    h1 + p,
    h2 + p,
    h3 + p,
    h4 + p,
    p + p {
      margin-top: 20px;
      ${mq1} {
        margin-top: 24px;
      }
    }

    p + h1,
    p + h2,
    p + h3,
    p + h4,
    .button + h3 {
      margin-top: 36px;
      ${mq1} {
        margin-top: 40px;
      }
    }

    p + .button {
      margin-top: 24px;
    }
  `
  )
);
